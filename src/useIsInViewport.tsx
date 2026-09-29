import { useState, useEffect, useMemo, useCallback } from 'react'

interface InstanceElement {
	makeItVisible: () => void
	element: HTMLElement | null
	offset: number
}

// array with all the elements that are waiting to be shown in the viewport
const elements = new Set<InstanceElement>()

const CheckIfRender = {
	// top: the position of the element in relation with the top of the browser
	// left: the position of the element in relation with the left of the browser
	// offset: the desired offset of the element in relation of the viewport
	isInViewPort: ({
		offset,
		top,
		left,
	}: {
		offset: number
		top: number
		left: number
	}) => top < window.innerHeight + offset && left < window.innerWidth + offset,

	calculateNewPosition: (elem: InstanceElement) => {
		const { top, left } = elem.element?.getBoundingClientRect() || {
			top: 0,
			left: 0,
		}

		return {
			...elem,
			top,
			left,
		}
	},
	addElement: (element: InstanceElement) => {
		//the distance from the pixel 0,0 and the top of the element
		elements.add(element)
		//check if has already been started the rAF cycle
		if (CheckIfRender.isListenerAttached === 0) {
			CheckIfRender.isListenerAttached = window.requestAnimationFrame(
				CheckIfRender.eventHandler,
			)
		}
	},
	showElementIfInViewport: (elem: InstanceElement) => {
		const haveToShow = CheckIfRender.isInViewPort(
			CheckIfRender.calculateNewPosition(elem),
		)
		if (!haveToShow) return

		elem.makeItVisible()
		// remove element from the list of elements to lazy load
		CheckIfRender.removeElementFromList(elem)
	},
	eventHandler: () => {
		//if there is no more element to lazy load remove the listener/rAF
		if (elements.size === 0) {
			CheckIfRender.removeScrollHandler()
			return
		}

		elements.forEach(CheckIfRender.showElementIfInViewport)
		CheckIfRender.isListenerAttached = window.requestAnimationFrame(
			CheckIfRender.eventHandler,
		)
	},

	removeScrollHandler: () => {
		window.cancelAnimationFrame(CheckIfRender.isListenerAttached)
		CheckIfRender.isListenerAttached = 0
	},
	//When an element is unloaded remove it from the list of elements that are waiting to be lazy-loaded
	removeElementFromList: (toRemove: InstanceElement) => {
		elements.delete(toRemove)
	},
	isListenerAttached: 0, // intended as not set
}

export default function useRenderIfInViewPort(props: {
	link: string
	offset: number
}): [(node: HTMLDivElement | null) => void, string, boolean] {
	const [link, setLink] = useState('')
	const [visible, setVisible] = useState(false)

	const [ref, setRef] = useState<HTMLDivElement | null>(null)

	const makeItVisible = useCallback(() => {
		if (props.link) setLink(() => props.link)
		setVisible(() => true)
	}, [props.link])

	const thisInstance = useMemo(() => {
		return {
			element: ref,
			makeItVisible,
			offset: props.offset || 100,
		}
	}, [ref, props.offset, makeItVisible])

	const getRef = useCallback((node: HTMLDivElement | null) => {
		if (node !== null) setRef(node)
	}, [])

	useEffect(() => {
		if (ref !== null)
			// add the element to the array of elements that are waiting to be lazy loaded
			CheckIfRender.addElement(thisInstance)
		return () =>
			// if the element is unloaded remove the element from the list of elements that needs to be lazy loader
			CheckIfRender.removeElementFromList(thisInstance)
	}, [ref, thisInstance])

	return [getRef, link, visible]
}
