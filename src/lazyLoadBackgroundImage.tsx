import { useState, useEffect, type ReactNode } from 'react'
import useIsInViewPort from './index'

interface LazyBackgroundImageProps {
	link: string
	offset: number
	style: object
	className: string
	children: ReactNode
}

export default function LazyBackgroundImage(props: LazyBackgroundImageProps) {
	const [setRef, link, isViewable] = useIsInViewPort(props)

	const [style, setStyle] = useState({
		backgroundImage: `url(${link})`,
		...props.style,
	})

	useEffect(() => {
		isViewable
			? setStyle({
					backgroundImage: `url(${link})`,
					...props.style,
				})
			: null
	}, [link, isViewable, props.style])

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
