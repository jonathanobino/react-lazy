import React, {Component, PropTypes} from 'react'  // eslint-disable-line no-unused-vars

const isInViewPort = ({offset, top, left}) => window.scrollY + window.innerHeight + offset > top 
	&& window.scrollX + window.innerWidth + offset > left 

const calculateNewPosition = (elem) => {
	const reference = elem.element.domNode
	const {top, left, right} = reference.getBoundingClientRect()
	return {
		...elem,
		top,
		left,
		right
	}
}

class CheckIfRender extends Component {
	constructor(props) {
		super(props)
		this.state = {
			link:''
		}
		this.makeItVisible = this.makeItVisible.bind(this)
	}
	makeItVisible() {
		this.setState({link:this.props.link})
	}
	componentDidMount() {
		CheckIfRender.addElement(this)
	}
	componentWillUnmount() {
		CheckIfRender.removeElementFromList(this)
	}
}

CheckIfRender.elements = []

CheckIfRender.eventHandler = function() {

	if(CheckIfRender.elements.length === 0) {
		CheckIfRender.removeScrollHandler()
	} else {
		let savedIndexs = []
		for(let i = 0; i < CheckIfRender.elements.length ; i++) {
			if(isInViewPort(CheckIfRender.elements[i])){
				CheckIfRender.elements[i].element.makeItVisible()
				savedIndexs.push(i)
			}
		}
		if(savedIndexs.length > 0)
			CheckIfRender.elements = CheckIfRender.elements.filter((elem, index) => !savedIndexs.includes(index))
		CheckIfRender.elements = CheckIfRender.elements.map(elem => calculateNewPosition(elem))
		CheckIfRender.isListenerAttached = window.requestAnimationFrame(CheckIfRender.eventHandler)
	}
}

CheckIfRender.addElement = function(element) {
	//the distance from the pixel 0,0 and the top of the element
	const {top, left, right} = element.domNode.getBoundingClientRect()
	//move element to just domNode reference
	CheckIfRender.elements.push({
		element,
		top,
		left,
		right,
		offset:element.props.offset || 100
	})
	if(typeof CheckIfRender.isListenerAttached !== 'function') {
		CheckIfRender.isListenerAttached = window.requestAnimationFrame(CheckIfRender.eventHandler)
	}
}

CheckIfRender.removeScrollHandler = function() {
	window.cancelAnimationFrame(CheckIfRender.isListenerAttached)
}

CheckIfRender.removeElementFromList = function(toRemove) {
	CheckIfRender.elements = CheckIfRender.elements.filter(elem => elem.element !== toRemove)
}

CheckIfRender.isListenerAttached = false

if(!process.NODE_ENV === 'production') {
	CheckIfRender.propTypes = {
		link: PropTypes.string.isRequired
	}
}

export default CheckIfRender