import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

class LazyBackgroundImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		return <div 
			className={this.props.className} 
			style={this.style}
			ref={(node)=>this.domNode = node}
		>
		</div>
	}
	componentWillMount() {
		this.style = {
			minHeight:'300px',
			minWidth:'100%',
			backgroundImage:`url(${this.state.link})`,
			...this.props.style}
	}

	componentWillUpdate(nextProps, nextState) {
		this.style = {
			...this.style,
			backgroundImage:`url(${nextState.link})`
		}
	}
}

LazyBackgroundImage.defaultProps = {
	className:'',
	style:{}
}

export default LazyBackgroundImage