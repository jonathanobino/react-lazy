import React, {Component, PropTypes} from 'react'  // eslint-disable-line no-unused-vars

function isInViewPort({top, left, offset = 100}) {
	//checks if the element is in both orizzontal and vertial viewport
	let verticalViewPort = window.scrollY + window.innerHeight + offset > top
	let orizzontalViewPort = window.scrollX + window.innerWidth + offset > left
	return verticalViewPort && orizzontalViewPort
}

function calculateNewPosition(elem){
	const reference = elem.element.domNode
	const {top, left} = reference.getBoundingClientRect()
	return Object.assign(elem, {
		top,
		left
	})
}

class CheckIfRender extends Component {
	constructor(props) {
		super(props)
		//initialize to an empty link to stop loading the resource
		this.state = {
			link:''
		}
		//binding everything to 'this'
		this.makeItVisible = this.makeItVisible.bind(this)
	}
	makeItVisible() {
		this.setState({link:this.props.link})
	}
	componentDidMount() {
		const element = this.domNode
		//the distance from the pixel 0,0 and the top of the element
		const {top, left} = element.getBoundingClientRect()
		CheckIfRender.elements.push({element:this, top, left, offset:this.props.offset})
		if(!CheckIfRender.isListenerAttached) {
			CheckIfRender.isListenerAttached = true
			window.addEventListener('scroll', CheckIfRender.scrollHandler)
		}
	}
	componentWillUnmount(){
		CheckIfRender.removeElementFromList(this)
	}
}

CheckIfRender.elements = []

CheckIfRender.scrollHandler = function() {
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
			CheckIfRender.elements = CheckIfRender.elements.filter((elem, index) => !savedIndexs.includes(index)).map(elem => calculateNewPosition(elem))
	}
}

CheckIfRender.removeScrollHandler = function() {
	window.removeEventListener('scroll', CheckIfRender.scrollHandler)
}

CheckIfRender.removeElementFromList = function(toRemove){
	CheckIfRender.elements = CheckIfRender.elements.filter(elem => elem.element!==toRemove)
}

CheckIfRender.isListenerAttached = false

CheckIfRender.propTypes = {
	link: PropTypes.string.isRequired
}

export default CheckIfRender