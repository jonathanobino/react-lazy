'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var CheckIfRender = function (_React$Component) {
	_inherits(CheckIfRender, _React$Component);

	function CheckIfRender(props) {
		_classCallCheck(this, CheckIfRender);

		//initialize to an empty link to stop performing a new https request
		var _this = _possibleConstructorReturn(this, (CheckIfRender.__proto__ || Object.getPrototypeOf(CheckIfRender)).call(this, props));

		_this.state = {
			link: ''
		};
		//binding everything to 'this'
		_this.listener = _this.listener.bind(_this);
		_this.removeListener = _this.removeListener.bind(_this);
		return _this;
	}

	_createClass(CheckIfRender, [{
		key: 'listener',
		value: function listener() {
			//check if the element is vertically visible
			if (window.scrollY + window.innerWidth + this.props.offset > this.state.top) {
				//if it's visible update the state with the link provided in the props
				this.setState({ link: this.props.link });
				//remove the event listener
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
			var element = ReactDOM.findDOMNode(this);
			//the distance from the pixel 0,0 and the top of the element

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
}(React.Component);

CheckIfRender.defaultProps = {
	offset: 100
};

CheckIfRender.propTypes = {
	link: React.PropTypes.string.isRequired
};

module.exports = CheckIfRender;
'use strict';

var LazyBackgroundImage = require('./lazyLoadBackgroundImage');
var LazyImage = require('./lazyLoadImage');
var LazyFrame = require('./lazyLoadFrame');

module.exports = {
	LazyBackgroundImage: LazyBackgroundImage,
	LazyImage: LazyImage,
	LazyFrame: LazyFrame
};
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var CheckIfRender = require('./baseClass');

var LazyBackgroundImage = function (_CheckIfRender) {
	_inherits(LazyBackgroundImage, _CheckIfRender);

	function LazyBackgroundImage(props) {
		_classCallCheck(this, LazyBackgroundImage);

		return _possibleConstructorReturn(this, (LazyBackgroundImage.__proto__ || Object.getPrototypeOf(LazyBackgroundImage)).call(this, props));
	}

	_createClass(LazyBackgroundImage, [{
		key: 'render',
		value: function render() {
			return React.createElement('div', { className: this.props.className, style: { backgroundImage: 'url(' + this.state.link + ')' } });
		}
	}]);

	return LazyBackgroundImage;
}(CheckIfRender);

LazyBackgroundImage.defaultProps = {
	className: ''
};

module.exports = LazyBackgroundImage;
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var CheckIfRender = require('./baseClass');

module.exports = function (_CheckIfRender) {
	_inherits(LazyImage, _CheckIfRender);

	function LazyImage(props) {
		_classCallCheck(this, LazyImage);

		return _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));
	}

	_createClass(LazyImage, [{
		key: 'render',
		value: function render() {
			return React.createElement('img', { src: this.state.link, alt: this.props.alt });
		}
	}]);

	return LazyImage;
}(CheckIfRender);
