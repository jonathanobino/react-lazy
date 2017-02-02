import React from 'react'  // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

class LazyBackgroundImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		let style = Object.assign({}, this.props.style, {
			backgroundImage:`url(${this.state.link})`
		})
		
		return <div 
			className={this.props.className} 
			style={style}
			ref={(node)=>this.domNode = node}
		>
		</div>
	}
}

LazyBackgroundImage.defaultProps = {
	className:'',
	style:{}
}

export default LazyBackgroundImage