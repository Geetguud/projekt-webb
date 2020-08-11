var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import img from "./resources/pfp.webp";

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { id: "detail", className: "detail" },
                React.createElement(
                    "div",
                    { className: "detail1" },
                    React.createElement(
                        "h2",
                        null,
                        "about @me"
                    ),
                    React.createElement("img", { className: "geetguudsmol", src: img })
                ),
                React.createElement(
                    "div",
                    { className: "detail2" },
                    React.createElement(
                        "p",
                        null,
                        "Hello there..."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "My name is Muhammad Ainurrahman, now's still newbie on being a coder. I'm currently a last year highschool student in Indonesia. Discovered about coding pretty much recently, and somehow chose web development. I have learned a bit about html, css, and javascript, thanks to free resources in the internet."
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

export default About;
