import React, { useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyFrame(props: any) {
  const ref = useRef<HTMLIFrameElement>(null)
  let [link] = useIsInViewPort(ref, props)

  return (
    <iframe
      height={props.height || '500'}
      scrolling={props.scrolling || 'no'}
      src={link}
      frameBorder={props.frameBorder || 'no'}
      allowFullScreen={props.allowFullScreen || true}
      style={props.style || {}}
      ref={ref}
      {...props}
    />
  )
}
