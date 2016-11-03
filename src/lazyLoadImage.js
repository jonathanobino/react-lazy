import React from 'react'
import CheckIfRender from './baseClass'

export default class LazyImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){
		return <img src={this.state.link} alt={this.props.alt}></img>
	}
}