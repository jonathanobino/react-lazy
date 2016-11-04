#react-lazy

Utility components to lazy load images, images-as-bacgkround and iframes.

##Install

`npm install --save react-lazy`

##Demo

You can see a demo of those packages working in my personal site.
[Demo](http://jonathanobino.xyz)


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
import {LazyBackgroundImage as Lazy} from 'react-lazy'

class Example extents React.component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<Lazy 
			link={'https://images.unsplash.com/photo-1471882108153-09c9b7452933?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c63961fa4ff91dc2a8a85235a29c968c'}
			offset={100}
			/>
		</div>
	}
}
```
