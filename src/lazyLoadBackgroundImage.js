import React from 'react'
import CheckIfRender from './baseClass'

export default class LazyBackgroundImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		return <div className={this.props.className} style={{backgroundImage:`url(${this.state.link})`}}></div>
	}
}