import React from 'react'
import CheckIfRender from './baseClass'

class LazyFrame extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		return <iframe height={this.props.height}
			scrolling={this.props.scrolling}
			src={this.state.link}
			frameBorder={this.props.frameBorder}
			allowTransparency={this.props.allowTransparency}
			allowFullScreen={this.props.allowFullScreen}
			style={this.props.style} >
		</iframe>
	}
}

LazyFrame.defaultProps = {
	height:'500',
	scrolling:'no',
	frameBorder:'no',
	allowTransparency:'true',
	allowFullScreen:'true',
	style:{
		width:'100%'
	}
}

export default LazyFrame