import React from 'react'
import ReactDom from 'react-dom'

class CheckIfRender extends React.Component {
	constructor(props) {
		super(props)
		//initialize to an empty link to stop performing a new https request
		this.state = {
			link:''
		}
	}
	listener() {
		//check if the element is vertically visible
		if(window.scrollY + window.innerWidth + this.props.offset > this.state.top) {
			//if it's visible update the state with the link provided in the props
			this.setState({link:this.props.link})
			//remove the event listener
			this.removeListener()
		}
	}
	removeListener(){
		window.removeEventListener('scroll',this.listener)
	}
	componentDidMount() {
		const element = ReactDom.findDOMNode(this);
		//the distance from the pixel 0,0 and the top of the element
		const {top} = element.getBoundingClientRect();
		this.setState({top})
		window.addEventListener('scroll',this.listener);
	}
	componentWillUnmount() {
		this.removeListener()
	}
}

CheckIfRender.defaultProps = {
	offset: 100
}

CheckIfRender.propTypes = {
	link: React.PropTypes.string.isRequired
}

export default CheckIfRender