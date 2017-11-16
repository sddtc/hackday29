var React = require('react');
var Page0 = require('./page0');
var Page1 = require('./page1');
var Page2 = require('./page2');
var Page3 = require('./page3');
var Page4 = require('./page4');
var Page5 = require('./page5');
var Page6 = require('./page6');
var Page7 = require('./page7');
var Page8 = require('./page8');



var Pages = React.createClass({
  render: function(){
    return (
     <div id="pages">
       <Page8 data={this.props.data}></Page8>
     </div>
    );
  }
});

module.exports = Pages;