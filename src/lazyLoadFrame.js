import React, { useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './baseClass'

export default function LazyFrame(props) {
  const ref = useRef()
  let isViewable = useIsInViewPort(ref, props)

  return (
    <iframe
      height={props.height || '500'}
      scrolling={props.scrolling || 'no'}
      src={isViewable.link}
      frameBorder={props.frameBorder || 'no'}
      allowtransparency={props.allowTransparency || 'true'}
      allowFullScreen={props.allowFullScreen || true}
      style={props.style || {}}
      ref={ref}
    />
  )
}
