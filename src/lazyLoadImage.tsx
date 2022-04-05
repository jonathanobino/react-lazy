import React from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyImage(props: any) {
  const [setRef, link] = useIsInViewPort(props)

  return (
    <div
      ref={(node) => {
        setRef(node)
      }}
    >
      <img
        src={link}
        alt={props.alt}
        style={props.style}
        className={props.className}
      />
    </div>
  )
}
