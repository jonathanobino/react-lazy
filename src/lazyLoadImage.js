import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

export default class LazyImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){
		let style = this.props.style || {}
		if(this.state.link === '' && !style.height && !style.width){
			style = Object.assign(style, {
				height:'300px'
			})
		}

		return <img src={this.state.link} alt={this.props.alt} style={this.props.style}></img>
	}
}