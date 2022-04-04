import React, { useEffect, useRef } from 'react'
import useIsInViewport from './index'

const LazyComponent = function (props: any) {
  let ref = useRef<HTMLDivElement>(null)
  const [, isVisible] = useIsInViewport(ref, props)

  if (!isVisible)
    return (
      <div
        ref={ref}
        style={{
          height: '300px',
          width: '300px',
          ...props.style,
        }}
      ></div>
    )

  return <div>{props.children}</div>
}

export default LazyComponent
