import React, { useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './baseClass'

export default function LazyImage(props) {
  const ref = useRef()
  const isViewable = useIsInViewPort(ref, props)

  return (
    <img
      src={isViewable.link}
      alt={props.alt}
      style={props.style}
      className={props.className}
      ref={ref}
    />
  )
}
