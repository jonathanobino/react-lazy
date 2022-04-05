import React from 'react'
import useIsInViewport from './index'

export default function LazyComponent(props: any) {
  const [setRef, link, isVisible] = useIsInViewport(props)

  if (!isVisible)
    return (
      <div
        ref={(node) => {
          setRef(node)
        }}
        style={{
          height: '300px',
          width: '300px',
          ...props.style,
        }}
      ></div>
    )

  return <div>{props.children}</div>
}
