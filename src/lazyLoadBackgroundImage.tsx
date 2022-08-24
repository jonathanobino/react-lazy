import React, { useState, useEffect } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyBackgroundImage(props: any) {
  const [setRef, link, isViewable] = useIsInViewPort(props)

  const [style, setStyle] = useState({
    backgroundImage: `url(${link})`,
    ...props.style,
  })

  useEffect(() => {
    setStyle({
      backgroundImage: `url(${link})`,
      ...props.style,
    })
  }, [link, isViewable])

  return (
    <div
      className={props.className}
      style={style}
      ref={(node) => {
        setRef(node)
      }}
    >
      {props.children}
    </div>
  )
}
