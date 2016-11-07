import React from 'react'
import CheckIfRender from './baseClass'

class LazyBackgroundImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		let style = Object.assign({}, this.props.style, {
			backgroundImage:`url(${this.state.link})`
		})
		return <div className={this.props.className} style={style}></div>
	}
}

LazyBackgroundImage.defaultProps = {
	className:'',
	style:{}
}

export default LazyBackgroundImage