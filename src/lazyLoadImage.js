const React = require('react')
const CheckIfRender = require('./baseClass')

module.exports = class LazyImage extends CheckIfRender {
	constructor(props) {
		super(props)
	}
	render(){
		return <img src={this.state.link} alt={this.props.alt}></img>
	}
}