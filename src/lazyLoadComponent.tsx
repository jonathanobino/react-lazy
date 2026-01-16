import type { ReactNode } from 'react'
import useIsInViewport from './index'

interface LazyComponentProps {
  link: string,
  offset: number,
  style: object,
  children: ReactNode
}

export default function LazyComponent(props: LazyComponentProps) {
	const [setRef, _, isVisible] = useIsInViewport(props)

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
