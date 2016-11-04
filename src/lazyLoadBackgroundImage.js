const React = require('react')
const CheckIfRender = require('./baseClass')

class LazyBackgroundImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render() {
		return <div className={this.props.className} style={{backgroundImage:`url(${this.state.link})`}}></div>
	}
}

LazyBackgroundImage.defaultProps = {
	className:''
}

module.exports =  LazyBackgroundImage