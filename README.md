#lazy-react

[![Code Climate](https://codeclimate.com/github/jonathanobino/react-lazy/badges/gpa.svg)](https://codeclimate.com/github/jonathanobino/react-lazy) [![Test Coverage](https://codeclimate.com/github/jonathanobino/react-lazy/badges/coverage.svg)](https://codeclimate.com/github/jonathanobino/react-lazy/coverage) [![Issue Count](https://codeclimate.com/github/jonathanobino/react-lazy/badges/issue_count.svg)](https://codeclimate.com/github/jonathanobino/react-lazy)

Utility components to lazy load images, images-as-background and iframes using just one scroll listener for all the elements.

##Install

`npm install --save lazy-react`  

Also available as umd on [unpkg](https://unpkg.com/lazy-react) 

`<script src="https://unpkg.com/lazy-react"></script>`

##Demo

You can see a demo of those packages in my [personal site](http://jonathanobino.xyz), cloning the repo and open the index.html in the demo folder or in this [codepen](http://codepen.io/jonathanobino/full/mOdXNb/).

##Usage

The package exports 3 components:

- LazyBackgroundImage
- LazyImage
- LazyFrame

Every component accepts **offeset** as a prop, with 100px as fallback.

###LazyBackgroundImage

####Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link | String | the url of the resource | ✔️
className  | String | html class attribute |  | empty string
style  | Object | html style attribute |  | {}

###LazyImage

####Props
Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link | String | the url of the resource | ✔️
alt  | String | same as html image alt attribute |  | empty string
style  | Object | html style attribute |  | {}
className  | String | html class attribute |  | empty string

If no style.height has been provided, it will use 300px as fallback to calculate position.

###LazyFrame

####Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link  | String | the url of the resource | ✔️
height  | String | same as html image alt attribute |  | 500px
scrolling | String | same as html |  | 'no'
frameBorder  | String | same as html |  | 'no'
allowTransparency  | String | same as html |  | 'true'
allowFullScreen  | String | same as html |  | 'true'
style  | Object | html style attribute |  | {width:'100%'}

##Example code

```javascript
//with es6
import {LazyBackgroundImage, LazyImage, LazyFrame} from 'lazy-react'
//with es5
var LazyBackgroundImage = require('lazy-react').LazyBackgroundImage
var LazyImage = require('lazy-react').LazyImage
var LazyFrame = require('lazy-react').LazyFrame

class Example extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<LazyBackgroundImage 
				link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'} 
				className="fill"
			/>
			<LazyImage 
				link={'https://images.unsplash.com/photo-1462834026679-7c03bf571a67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e160dc1e65511df7bf1c461f8a93c82'} 
				offset={100}
			/>
			<LazyFrame 
				link={'http://jonathanobino.xyz'} 
				scrolling={true}
			/>
		</div>
	}
}
```

##Contributing

Pull requests for bug fixes, new features, and improvements are welcomed.