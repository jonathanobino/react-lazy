import React, { useState, useEffect, useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './baseClass'

export default function LazyBackgroundImage(props) {
  const ref = useRef()
  let isViewable = useIsInViewPort(ref, props)
  const [style, setStyle] = useState({
    backgroundImage: `url(${isViewable.link})`,
    ...props.style,
  })

  useEffect(() => {
    setStyle({
      backgroundImage: `url(${isViewable.link})`,
      ...props.style,
    })
  }, [isViewable])

  return (
    <div className={props.className} style={style} ref={ref}>
      {props.children}
    </div>
  )
}
