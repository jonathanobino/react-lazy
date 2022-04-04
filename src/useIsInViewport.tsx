import React, { useState, useEffect, useMemo, RefObject } from 'react' // eslint-disable-line no-unused-vars

interface InstanceElement {
  makeItVisible: () => void
  element: RefObject<HTMLElement>
  offset: number
}

export default function useRenderIfInViewPort(
  element: RefObject<HTMLElement>,
  props: { link: string; offset: number }
): [string, boolean] {
  const [link, setLink] = useState('')
  const [visible, setVisible] = useState(false)

  function makeItVisible() {
    setLink(() => props.link)
    setVisible(() => true)
  }

  const thisInstance = useMemo(() => {
    return {
      element,
      makeItVisible,
      offset: props.offset || 100,
    }
  }, [element, props])

  useEffect(() => {
    if (element !== undefined)
      // add the element to the array of elements that are waiting to be lazy loaded
      CheckIfRender.addElement(thisInstance)
    return () =>
      // if the element is unloaded remove the element from the list of elements that needs to be lazy loader
      CheckIfRender.removeElementFromList(thisInstance)
  }, [])

  return [link, visible]
}

// array with all the elements that are waiting to be shown in the viewport

let elements: InstanceElement[] = []

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
    const { top, left } = elem.element.current?.getBoundingClientRect() || {
      top: 0,
      left: 0,
    }
    return {
      ...elem,
      top,
      left,
    }
  },
  addElement: function (element: InstanceElement) {
    //the distance from the pixel 0,0 and the top of the element
    elements.push(element)
    //check if has already been started the rAF cycle
    if (CheckIfRender.isListenerAttached === 0) {
      CheckIfRender.isListenerAttached = window.requestAnimationFrame(
        CheckIfRender.eventHandler
      )
    }
  },
  eventHandler: function () {
    //if there is no more element to lazy load remove the listener/rAF
    if (elements.length === 0) {
      CheckIfRender.removeScrollHandler()
    } else {
      elements.forEach((elem, i) => {
        const haveToShow = CheckIfRender.isInViewPort(
          CheckIfRender.calculateNewPosition(elem)
        )
        if (haveToShow) {
          elem.makeItVisible()
          // remove element from the list of elements to lazy load
          CheckIfRender.removeElementFromList(elem)
        }
      })
      CheckIfRender.isListenerAttached = window.requestAnimationFrame(
        CheckIfRender.eventHandler
      )
    }
  },

  removeScrollHandler: function () {
    window.cancelAnimationFrame(CheckIfRender.isListenerAttached)
    CheckIfRender.isListenerAttached = 0
  },
  //When an element is unloaded remove it from the list of elements that are waiting to be lazy-loaded
  removeElementFromList: function (toRemove: InstanceElement) {
    elements = elements.filter((elem) => elem !== toRemove)
  },
  isListenerAttached: 0, // intended as not set
}

export { CheckIfRender }
