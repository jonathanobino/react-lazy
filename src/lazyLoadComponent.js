import React, { useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './baseClass'

export default function LazyComponent(props) {
  const ref = useRef()
  let isViewable = useIsInViewPort(ref, props)

  const placeHolder = (
    <div
      style={
        props.style
          ? props.style
          : {
              heigt: '300px',
              width: '300px',
            }
      }
    />
  )

  return (
    <div ref={ref}>{isViewable.visible ? props.children : placeHolder}</div>
  )
}
