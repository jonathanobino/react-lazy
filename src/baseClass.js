import React, { useState, useEffect } from 'react' // eslint-disable-line no-unused-vars

export default function useRenderIfInViewPort(element, props) {
  const [state, setState] = useState({
    link: '',
    visible: false,
  })

  function makeItVisible () {
    setState({
      visible: true,
      link: props.link,
    })
  }

  useEffect(() => {
    if(element.current !== undefined)
      CheckIfRender.addElement({
        element: element.current,
        props,
        makeItVisible})
    return () => CheckIfRender.removeElementFromList({
      element:element.current,
      props,
      makeItVisible
    })
  },[])

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

CheckIfRender.addElement = function ({element, props, makeItVisible}) {
  //the distance from the pixel 0,0 and the top of the element
  const { top, left, right } = element.getBoundingClientRect()
  CheckIfRender.elements.push({
    element,
    top,
    left,
    right,
    offset: props.offset || 100,
    makeItVisible
  })
  //check if has already been started the rAF cycle
  if (typeof CheckIfRender.isListenerAttached !== 'function') {
    CheckIfRender.isListenerAttached = window.requestAnimationFrame(
      CheckIfRender.eventHandler
    )
  }
}


CheckIfRender.eventHandler = function () {
  //if there is no more element to lazy load just remove the listeners/rAF
  if (CheckIfRender.elements.length === 0) {
    CheckIfRender.removeScrollHandler()
  } else {
    //save every index of elements that has been loaded
    let savedIndexs = []
    for (let i = 0; i < CheckIfRender.elements.length; i++) {
      if (CheckIfRender.isInViewPort(CheckIfRender.elements[i])) {
        savedIndexs.push(i)
        //make the element visible
        CheckIfRender.elements[i].makeItVisible() // hope this works
      }
    }
    //remove elements that has already been loaded from the list of the elements
    if (savedIndexs.length > 0)
      CheckIfRender.elements = CheckIfRender.elements.filter(
        (elem, index) => !savedIndexs.includes(index)
      )
    //update the coordinates of the elements
    CheckIfRender.elements = CheckIfRender.elements.map((elem) =>
      CheckIfRender.calculateNewPosition(elem)
    )
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
