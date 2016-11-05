'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var CheckIfRender = require('./baseClass');

var LazyFrame = function (_CheckIfRender) {
	_inherits(LazyFrame, _CheckIfRender);

	function LazyFrame(props) {
		_classCallCheck(this, LazyFrame);

		return _possibleConstructorReturn(this, (LazyFrame.__proto__ || Object.getPrototypeOf(LazyFrame)).call(this, props));
	}

	_createClass(LazyFrame, [{
		key: 'render',
		value: function render() {
			return React.createElement('iframe', { height: this.props.height,
				scrolling: this.props.scrolling,
				src: this.state.link,
				frameBorder: this.props.frameBorder,
				allowTransparency: this.props.allowTransparency,
				allowFullScreen: this.props.allowFullScreen,
				style: this.props.style });
		}
	}]);

	return LazyFrame;
}(CheckIfRender);

LazyFrame.defaultProps = {
	height: '500',
	scrolling: 'no',
	frameBorder: 'no',
	allowTransparency: 'true',
	allowFullScreen: 'true',
	style: {
		width: '100%'
	}
};

module.exports = LazyFrame;