'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LazyFrame = exports.LazyImage = exports.LazyBackgroundImage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //this file it's here just for reference on how build size differs with webpack and babel when there is one or more files involved

var CheckIfRender = function (_React$Component) {
	_inherits(CheckIfRender, _React$Component);

	function CheckIfRender(props) {
		_classCallCheck(this, CheckIfRender);

		var _this = _possibleConstructorReturn(this, (CheckIfRender.__proto__ || Object.getPrototypeOf(CheckIfRender)).call(this, props));

		_this.state = {
			link: ''
		};
		return _this;
	}

	_createClass(CheckIfRender, [{
		key: 'listener',
		value: function listener() {
			if (window.scrollY + window.innerWidth + 100 > this.state.top) {
				this.setState({ link: this.props.link });
				this.removeListener();
			}
		}
	}, {
		key: 'removeListener',
		value: function removeListener() {
			window.removeEventListener('scroll', this.listener);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var element = _reactDom2.default.findDOMNode(this);

			var _element$getBoundingC = element.getBoundingClientRect(),
			    top = _element$getBoundingC.top;

			this.setState({ top: top });
			window.addEventListener('scroll', this.listener);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.removeListener();
		}
	}]);

	return CheckIfRender;
}(_react2.default.Component);

var LazyFrame = function (_CheckIfRender) {
	_inherits(LazyFrame, _CheckIfRender);

	function LazyFrame(props) {
		_classCallCheck(this, LazyFrame);

		return _possibleConstructorReturn(this, (LazyFrame.__proto__ || Object.getPrototypeOf(LazyFrame)).call(this, props));
	}

	_createClass(LazyFrame, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('iframe', { height: this.props.height || '500',
				scrolling: this.props.scrolling || 'no',
				src: this.state.link,
				frameBorder: this.props.frameBorder || 'no',
				allowTransparency: this.props.allowTransparency || 'true',
				allowFullScreen: this.props.allowFullScreen || 'true',
				style: this.props.style || { width: '100%' } });
		}
	}]);

	return LazyFrame;
}(CheckIfRender);

var LazyBackgroundImage = function (_CheckIfRender2) {
	_inherits(LazyBackgroundImage, _CheckIfRender2);

	function LazyBackgroundImage(props) {
		_classCallCheck(this, LazyBackgroundImage);

		return _possibleConstructorReturn(this, (LazyBackgroundImage.__proto__ || Object.getPrototypeOf(LazyBackgroundImage)).call(this, props));
	}

	_createClass(LazyBackgroundImage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: this.props.className, style: { backgroundImage: 'url(' + this.state.link + ')' } });
		}
	}]);

	return LazyBackgroundImage;
}(CheckIfRender);

var LazyImage = function (_CheckIfRender3) {
	_inherits(LazyImage, _CheckIfRender3);

	function LazyImage(props) {
		_classCallCheck(this, LazyImage);

		return _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));
	}

	_createClass(LazyImage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('img', { src: this.state.link, alt: this.props.alt });
		}
	}]);

	return LazyImage;
}(CheckIfRender);

exports.LazyBackgroundImage = LazyBackgroundImage;
exports.LazyImage = LazyImage;
exports.LazyFrame = LazyFrame;