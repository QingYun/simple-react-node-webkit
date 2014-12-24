global.document = window.document
global.navigator = window.navigator

var React = require("react")
var Test = require("./test")

var App = React.createClass({
  render: function () {
    return React.createElement("div", null, React.createElement(Test, null))
  }
})

React.render(React.createElement(App, null), document.body)