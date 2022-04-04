import React, { useState, useEffect, useRef } from 'react' // eslint-disable-line no-unused-vars
import useIsInViewPort from './index'

export default function LazyBackgroundImage(props: any) {
  const ref = useRef<HTMLDivElement>(null)
  let [link, isViewable] = useIsInViewPort(ref, props)

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
    <div className={props.className} style={style} ref={ref}>
      {props.children}
    </div>
  )
}
