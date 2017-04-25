//this file it's here just for reference on how build size differs with webpack and babel when there is one or more files involved

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom'

class CheckIfRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: ''
    }
  }
  listener() {
    if (window.scrollY + window.innerWidth + 100 > this.state.top) {
      this.setState({ link: this.props.link })
      this.removeListener()
    }
  }
  removeListener() {
    window.removeEventListener('scroll', this.listener)
  }
  componentDidMount() {
    const element = ReactDom.findDOMNode(this)
    const { top } = element.getBoundingClientRect()
    this.setState({ top })
    window.addEventListener('scroll', this.listener)
  }
  componentWillUnmount() {
    this.removeListener()
  }
}

class LazyFrame extends CheckIfRender {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <iframe
        height={this.props.height || '500'}
        scrolling={this.props.scrolling || 'no'}
        src={this.state.link}
        frameBorder={this.props.frameBorder || 'no'}
        allowTransparency={this.props.allowTransparency || 'true'}
        allowFullScreen={this.props.allowFullScreen || 'true'}
        style={this.props.style || { width: '100%' }}
      />
    )
  }
}

class LazyBackgroundImage extends CheckIfRender {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        className={this.props.className}
        style={{ backgroundImage: `url(${this.state.link})` }}
      />
    )
  }
}

class LazyImage extends CheckIfRender {
  constructor(props) {
    super(props)
  }
  render() {
    return <img src={this.state.link} alt={this.props.alt} />
  }
}

export { LazyBackgroundImage, LazyImage, LazyFrame }
