import React, { useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyImage(props: any) {
  const ref = useRef<HTMLDivElement>(null)
  const [link, isViewable] = useIsInViewPort(ref, props)

  return (
    <div ref={ref}>
      <img
        src={link}
        alt={props.alt}
        style={props.style}
        className={props.className}
      />
    </div>
  )
}
