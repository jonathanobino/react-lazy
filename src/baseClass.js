import React, { useState, useEffect } from 'react' // eslint-disable-line no-unused-vars

export default function useRenderIfInViewPort(element, props) {
  const [state, setState] = useState({
    link: '',
    visible: false,
  })

  function makeItVisible() {
    setState({
      visible: true,
      link: props.link,
    })
  }

  useEffect(() => {
    if (element.current !== undefined)
      CheckIfRender.addElement({
        element: element.current,
        props,
        makeItVisible,
      })
    return () =>
      CheckIfRender.removeElementFromList({
        element: element.current,
        props,
        makeItVisible,
      })
  }, [])

  return state
}

const CheckIfRender = {
  elements: [],
}

CheckIfRender.isInViewPort = ({ offset, top, left }) =>
  window.scrollY + window.innerHeight + offset > top &&
  window.scrollX + window.innerWidth + offset > left

CheckIfRender.calculateNewPosition = (elem) => {
  const reference = elem.element
  const { top, left, right } = reference.getBoundingClientRect()
  return {
    ...elem,
    top,
    left,
    right,
  }
}

CheckIfRender.addElement = function ({ element, props, makeItVisible }) {
  //the distance from the pixel 0,0 and the top of the element
  const { top, left, right } = element.getBoundingClientRect()
  CheckIfRender.elements.push({
    element,
    top,
    left,
    right,
    offset: props.offset || 100,
    makeItVisible,
  })
  //check if has already been started the rAF cycle
  if (typeof CheckIfRender.isListenerAttached === 'boolean') {
    CheckIfRender.isListenerAttached = window.requestAnimationFrame(
      CheckIfRender.eventHandler
    )
  }
}

CheckIfRender.eventHandler = function () {
  //if there is no more element to lazy load remove the listener/rAF
  if (CheckIfRender.elements.length === 0) {
    CheckIfRender.removeScrollHandler()
  } else {
    CheckIfRender.elements.forEach((elem, i) => {
      // if element is in viewPort make it visible
      if (CheckIfRender.isInViewPort(elem)) {
        elem.makeItVisible()
        // remove element from the list of elements to lazy load
        CheckIfRender.removeElementFromList(elem)
      } else {
        // if the element is not shown update his position
        CheckIfRender.elements[i] = CheckIfRender.calculateNewPosition(elem)
      }
    })
    CheckIfRender.isListenerAttached = window.requestAnimationFrame(
      CheckIfRender.eventHandler
    )
  }
}

CheckIfRender.removeScrollHandler = function () {
  window.cancelAnimationFrame(CheckIfRender.isListenerAttached)
}

//When an element is unloaded remove it from the list of elements that are waiting to be lazy-loaded
CheckIfRender.removeElementFromList = function (toRemove) {
  CheckIfRender.elements = CheckIfRender.elements.filter(
    (elem) => elem !== toRemove
  )
}

CheckIfRender.isListenerAttached = false

export { CheckIfRender }
