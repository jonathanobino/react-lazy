import React,{Component,PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

class CheckIfRender extends Component {
	constructor(props) {
		super(props)
		//initialize to an empty link to stop loading the resource
		this.state = {
			link:''
		}
		//binding everything to 'this'
		this.listener = this.listener.bind(this)
		this.removeListener = this.removeListener.bind(this)
		this.isInViewPort = this.isInViewPort.bind(this)
	}
	listener() {
		//check if the element is vertically visible
		if(this.isInViewPort()) {
			//if it's visible update the state with the link provided in the props
			this.setState({link:this.props.link})
			//remove the event listener
			this.removeListener()
		}
	}
	isInViewPort() {
		//checks if the element is in both orizzontal and vertial viewport
		let offset = this.props.offset || 100
		let verticalViewPort = window.scrollY + window.innerHeight + offset > this.state.top
		let orizzontalViewPort = window.scrollX + window.innerWidth + offset > this.state.left
		return verticalViewPort && orizzontalViewPort
	}
	removeListener() {
		window.removeEventListener('scroll',this.listener)
	}
	componentDidMount() {
		const element = findDOMNode(this);
		//the distance from the pixel 0,0 and the top of the element
		const {top,left} = element.getBoundingClientRect();
		this.setState({top,left})
		window.addEventListener('scroll',this.listener);
	}
	componentWillUnmount() {
		this.removeListener()
	}
}

CheckIfRender.propTypes = {
	link: PropTypes.string.isRequired
}

export default CheckIfRender