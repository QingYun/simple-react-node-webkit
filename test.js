var React = require("react");

module.exports = React.createClass({
  render: function() {
    return React.createElement("input", {
      "type": "text",
      "value": "Hello!"
    });
  }
});

