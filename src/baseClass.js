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
        // add the element to the array of elements that are waiting to be lazy loaded
        element: element.current,
        props,
        makeItVisible,
      })
    return () =>
      CheckIfRender.removeElementFromList({
        // if the element is unloaded remove the element from the list of elements that needs to be lazy loader
        element: element.current,
        props,
        makeItVisible,
      })
  }, [])

  return state
}

// array with all the elements that are waiting to be shown in the viewport
const CheckIfRender = {
  elements: [],
}

// top: the position of the element in relation with the top of the browser
// left: the position of the element in relation with the left of the browser
// offset: the desired offset of the element in relation of the viewport
CheckIfRender.isInViewPort = ({ offset, top, left }) =>
  top < window.innerHeight + offset && left < window.innerWidth + offset

CheckIfRender.calculateNewPosition = (elem) => {
  const reference = elem.element
  const { top, left } = reference.getBoundingClientRect()
  return {
    ...elem,
    top,
    left,
  }
}

CheckIfRender.addElement = function ({ element, props, makeItVisible }) {
  //the distance from the pixel 0,0 and the top of the element
  const { top, left } = element.getBoundingClientRect()
  CheckIfRender.elements.push({
    element,
    top,
    left,
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
  CheckIfRender.isListenerAttached = false
}

//When an element is unloaded remove it from the list of elements that are waiting to be lazy-loaded
CheckIfRender.removeElementFromList = function (toRemove) {
  CheckIfRender.elements = CheckIfRender.elements.filter(
    (elem) => elem !== toRemove
  )
}

CheckIfRender.isListenerAttached = false

export { CheckIfRender }
