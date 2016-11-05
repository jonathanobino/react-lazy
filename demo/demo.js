import React from 'react'
import ReactDOM from 'react-dom'
import {LazyImage,LazyBackgroundImage,LazyFrame} from '../dist'

class Demo extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
	 return <div>
	   <h2>Just scroll</h2>
	    <LazyImage 
	      link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'} 
	      offset={0}
	    />
	     <LazyImage 
	      link={'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=44828cfc286e8eb8cd0ed2ca561f8cb9'} 
	           offset={100}
	    />
	    <LazyImage 
	      link={'https://images.unsplash.com/photo-1472132858735-6313c7962473?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f38318ed6adee6db020705bedf6d6e10'} 
	           offset={100}
	    />
	    <LazyImage 
	      link={'https://images.unsplash.com/photo-1469899324414-c72bfb4d4161?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=8d708d646e3b2d32c5faf67e01919872'} 
	           offset={100}
	    />
	    <LazyImage 
	      link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'} 
	           offset={100}
	    />
	    <LazyBackgroundImage link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'} 
	    className="fill"
	    />
	    <LazyFrame link={'http://jonathanobino.xyz'} scrolling={true}/>
	  </div>
	}
}

ReactDOM.render(<Demo/>,document.getElementById('app'))