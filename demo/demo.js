import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {LazyImage, LazyBackgroundImage, LazyFrame, LazyComponent} from '../dist'


class Experimental extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log('now I\'m loaded')
	}

	render(){
		return <h1> I'm lazy loaded !</h1>
	}
}

class Demo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let style = {
			minHeight:'100vh'
		}
	 return <div>
	   <h2>Just scroll</h2>
	   <div	style={{
	   	minHeight:'100vh',
	   	minWidth:'100vw',
	   	backgroundColor:'tomato'
	   }}></div>
	    <LazyBackgroundImage
	    	link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'}
	    	className="fill"
	    	// style={style}
	    />
		 <LazyBackgroundImage
			 link={'https://images.unsplash.com/photo-1645421561335-e30eb4635d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'}
			 className="fill"
		 // style={style}
		 />
		 <LazyBackgroundImage
			 link={'https://images.unsplash.com/photo-1645389692136-4b344532362f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}
			 className="fill"
		 // style={style}
		 />

	  </div>
	}
}

ReactDOM.render(<Demo/>,document.getElementById('app'))