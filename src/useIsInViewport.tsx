import { useState, useEffect, useMemo, useCallback } from 'react'

interface InstanceElement {
	makeItVisible: () => void
	element: HTMLElement | null
	offset: number
}

// Set of instances waiting to become visible in the viewport.
const elements = new Set<InstanceElement>()

const CheckIfRender = {
	// top and left: element coordinates relative to the viewport, in pixels.
	// offset: margin added to the viewport's bottom and right boundaries.
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
		// Register the instance for viewport checks.
		elements.add(element)
		// Start the animation frame loop if it is not already running.
		if (CheckIfRender.isListenerAttached === 0) {
			CheckIfRender.isListenerAttached = window.requestAnimationFrame(
				CheckIfRender.eventHandler,
			)
		}
	},
	subscribeElement: (instance: InstanceElement) => {
		if (instance.element !== null) {
			CheckIfRender.addElement(instance)
		}

		return () => CheckIfRender.removeElementFromList(instance)
	},
	showElementIfInViewport: (elem: InstanceElement) => {
		const haveToShow = CheckIfRender.isInViewPort(
			CheckIfRender.calculateNewPosition(elem),
		)
		if (!haveToShow) return

		elem.makeItVisible()
		// Remove the visible instance from the set of pending instances.
		CheckIfRender.removeElementFromList(elem)
	},
	eventHandler: () => {
		// Stop the animation frame loop when no pending instances remain.
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
	// Remove an instance after it becomes visible or its subscription ends.
	removeElementFromList: (toRemove: InstanceElement) => {
		elements.delete(toRemove)
	},
	isListenerAttached: 0, // Animation frame ID; 0 means the loop is inactive.
}

export default function useRenderIfInViewPort(props: {
	link: string
	offset: number
}): [(node: HTMLDivElement | null) => void, string, boolean] {
	const [link, setLink] = useState('')
	const [visible, setVisible] = useState(false)

	const [ref, setRef] = useState<HTMLDivElement | null>(null)

	const makeItVisible = useCallback(() => {
		setLink((currentLink) => props.link || currentLink)
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
		setRef((currentRef) => node ?? currentRef)
	}, [])

	useEffect(() => CheckIfRender.subscribeElement(thisInstance), [thisInstance])

	return [getRef, link, visible]
}
