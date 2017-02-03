import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

export default class LazyComponent extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){

		let toRender = this.state.visible ? this.props.children : <div/>

		return <div 
			style={this.style} 
			className={this.props.className} 
			ref={(node) => this.domNode = node}
		>
			{toRender}
		</div>
	}

	componentWillMount() {
		this.style = Object.assign({}, this.props.style)
		if(!this.state.link && !this.props.className && !this.style.height)
			this.style.height = '300px'
	}
}

LazyComponent.defaultProps = {
	style: {},
	className: ''
}