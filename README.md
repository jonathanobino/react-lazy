#lazy-react

Utility components to lazy load images, images-as-bacgkround and iframes.

##Install

`npm install --save lazy-react`

##Demo

You can see a demo of those packages in my [personal site](http://jonathanobino.xyz), cloning the repo and open the index.html in the demo folder or in this [codepen](http://codepen.io/jonathanobino/full/mOdXNb/).

##Usage

The package exports 3 components:

- LazyBackgroundImage
- LazyImage
- LazyFrame

Every component accept *offeset* as a prop.
With every component only the link prop is required, every other prop has a fallback to a default prop.

###LazyBackgroundImage

###Props

It accepts 2 props:

- className *optional*
- link: the url of the resource

###LazyImage

###Props

It accepts 2 props:

- alt
- link: the url of the resource

###LazyFrame

###Props

- height
- scrolling
- link: the url of the resource
- frameBorder
- allowTransparency
- allowFullScreen
- style

##Example code

```javascript
import {LazyBackgroundImage, LazyImage, LazyFrame} from 'react-lazy'

class Example extents React.component {
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
