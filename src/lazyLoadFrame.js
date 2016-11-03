import React from 'react'
import CheckIfRender from './baseClass'

export default class LazyFrame extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		return <iframe height={this.props.height || '500'} 
			scrolling={this.props.scrolling || 'no'} 
			src={this.state.link} 
			frameBorder={this.props.frameBorder || 'no'} 
			allowTransparency={this.props.allowTransparency || 'true'} 
			allowFullScreen={this.props.allowFullScreen || 'true'} 
			style={this.props.style || {width: '100%'}} >
		</iframe>
	}
}