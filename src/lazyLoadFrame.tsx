import useIsInViewPort from './index'

interface LazyFrameProps {
	height: number
	link: string
	offset: number
	allowFullScreen: boolean
}

export default function LazyFrame(props: LazyFrameProps) {
	const [setRef, link] = useIsInViewPort(props)

	return (
		<iframe
			// scrolling={props.scrolling || 'no'}
			src={link}
			// frameBorder={props.frameBorder || 'no'}
			// style={props.style || {border: props.frameBorder}}
			ref={(node) => {
				setRef(node)
			}}
			{...props}
			height={props.height || '500'}
			allowFullScreen={props.allowFullScreen || true}
		/>
	)
}
