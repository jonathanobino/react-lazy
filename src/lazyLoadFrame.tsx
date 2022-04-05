import React from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyFrame(props: any) {
  let [setRef, link] = useIsInViewPort(props)

  return (
    <iframe
      height={props.height || '500'}
      scrolling={props.scrolling || 'no'}
      src={link}
      frameBorder={props.frameBorder || 'no'}
      allowFullScreen={props.allowFullScreen || true}
      style={props.style || {}}
      ref={(node) => {
        setRef(node)
      }}
      {...props}
    />
  )
}
