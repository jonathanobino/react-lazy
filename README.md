# lazy-react

[![npm version](https://badge.fury.io/js/lazy-react.svg)](https://badge.fury.io/js/lazy-react) [![Issue Count](https://codeclimate.com/github/jonathanobino/react-lazy/badges/issue_count.svg)](https://codeclimate.com/github/jonathanobino/react-lazy) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Utility components to lazy load images, images-as-background and iframes using only requestAnimationFrame to handle scroll (both vertical and orizzontal) and window resize.

## Install

`npm install --save lazy-react`

Also available as umd on [unpkg](https://unpkg.com/lazy-react)

`<script src="https://unpkg.com/lazy-react"></script>`

## Demo

You can see a demo of those packages in my [personal site](http://jonathanobino.xyz), cloning the repo and open the index.html in the demo folder or in this [codepen](http://codepen.io/jonathanobino/full/mOdXNb/).

## Usage

The package exports 4 components:

- LazyBackgroundImage
- LazyImage
- LazyFrame
- LazyComponent

Every component accepts **offeset** as a prop, with 100px as fallback.

### LazyBackgroundImage

#### Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link | String | the url of the resource | ✔️
className  | String | html class attribute |  | empty string
style  | Object | html style attribute |  | {}

### LazyComponent

#### Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
className  | String | html class attribute |  | empty string
style  | Object | html style attribute |  | {} |

This component is used to have a div placeholder before loading the component.

Usage:
```javascript

<LazyComponent>
  <ComponentToLoadWhenInViewport>
</LazyComponent>

```

### LazyImage

#### Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link | String | the url of the resource | ✔️
alt  | String | same as html image alt attribute |  | empty string
style  | Object | html style attribute |  | {}
className  | String | html class attribute |  | empty string
preserveAspect | Boolean | If false it try to calculate width and height, it can break the layout | | true

If no style.height has been provided, it will use 300px as fallback to calculate position.
'preserveAspect' was added in 2.0.1 to prevent the component to apply style to the elements that doesn't have a class but are styled with nested selectors.

### LazyFrame

#### Props

Name | Type | Description | Required | Default
---|---| ---| ---| ---|
link  | String | the url of the resource | ✔️
height  | String | same as html image alt attribute |  | 500px
scrolling | String | same as html |  | 'no'
frameBorder  | String | same as html |  | 'no'
allowTransparency  | String | same as html |  | 'true'
allowFullScreen  | String | same as html |  | 'true'
style  | Object | html style attribute |  | {width:'100%'}

## Example code

```javascript
//with es6
import { LazyBackgroundImage, LazyImage, LazyFrame, LazyComponent } from 'lazy-react'
//with es5
var LazyBackgroundImage = require('lazy-react').LazyBackgroundImage
var LazyImage = require('lazy-react').LazyImage
var LazyFrame = require('lazy-react').LazyFrame
var LazyComponent = require('lazy-react').LazyComponent

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
      <LazyComponent>
        <ComponentToLoadWhenInViewport>
      </LazyComponent>
    </div>
  }
}
```

## Hook

Since version 3.x there is an hook available named 'useIsInViewport' that exposes 3 elements:

- setRef: used to set the ref of the dom that has to be in the viewport
- link: the passed link. It's equal to an empty string until the element is in the specified viewport
- isVisible: it's false until the element is in the specified viewport


Usage

```javascript

import useIsInViewport from 'lazy-react'

function Example({link, offset}) {
  const [setRef, link, isVisible] = useIsInViewport({link, offset})

  if(!isVisible){
    return <Placeholder />
  }

  return <div ref={(node)=>{
    setRef(node)
  }}>
    <Content/>
  </div>

}

```

The required props that have to be passed to the hooks are:

- link: string
- offset: number

## Contributing

Pull requests for bug fixes, new features, and improvements are welcomed.
