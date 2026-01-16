import useIsInViewPort from './index'

interface LazyImageProps {
  link: string,
  offset: number,
  alt: string,
  style: object,
  className: string
}

export default function LazyImage(props: LazyImageProps) {
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
