import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

class LazyFrame extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		let style = Object.assign({}, {
			width:'100%'
		}, this.props.style)
		
		return <iframe height={this.props.height}
			scrolling={this.props.scrolling}
			src={this.state.link}
			frameBorder={this.props.frameBorder}
			allowTransparency={this.props.allowTransparency}
			allowFullScreen={this.props.allowFullScreen}
			style={style} >
		</iframe>
	}
}

LazyFrame.defaultProps = {
	height:'500',
	scrolling:'no',
	frameBorder:'no',
	allowTransparency:'true',
	allowFullScreen:'true'
}

export default  LazyFrame