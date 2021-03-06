import React from 'react' // eslint-disable-line no-unused-vars
import CheckIfRender from './baseClass'

export default class LazyFrame extends CheckIfRender {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <iframe
        height={this.props.height}
        scrolling={this.props.scrolling}
        src={this.state.link}
        frameBorder={this.props.frameBorder}
        allowTransparency={this.props.allowTransparency}
        allowFullScreen={this.props.allowFullScreen}
        style={this.style}
        ref={node => (this.domNode = node)}
      />
    )
  }
  componentWillMount() {
    this.style = {
      minWidth: '100%',
      ...this.props.style
    }
  }
}

LazyFrame.defaultProps = {
  height: '500',
  scrolling: 'no',
  frameBorder: 'no',
  allowTransparency: 'true',
  allowFullScreen: 'true'
}
