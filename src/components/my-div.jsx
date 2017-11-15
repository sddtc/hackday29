var React = require('react');

var HRNavigation = React.createClass({
  render: function(){
    return (
     <div id="my-div"> Hello {this.props.data.nick_name}</div>
    );
  }
});

module.exports = HRNavigation;