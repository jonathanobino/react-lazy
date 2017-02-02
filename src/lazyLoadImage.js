import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

export default class LazyImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){
		return <img src={this.state.link} alt={this.props.alt} style={this.style} className={this.props.className}></img>
	}

	componentWillMount() {
		this.style = Object.assign({}, this.props.style)
		if(!this.state.link && !this.props.className && !this.style.height)
			this.style.height = '300px'
	}
}

LazyImage.defaultProps = {
	style: {},
	className: ''
}