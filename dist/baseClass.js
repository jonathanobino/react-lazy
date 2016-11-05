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