import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

class LazyImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){
		return <img 
			src={this.state.link} 
			alt={this.props.alt} 
			style={this.style} 
			className={this.props.className} 
			ref={(node)=>this.domNode = node}
		>
		</img>
	}
	componentWillMount() {
		this.style = {
			minHeight:'300px',
			minWidth:'300px',
			...this.props.style
		}
	}
}

LazyImage.defaultProps = {
	style: {},
	className: ''
}

export default LazyImage