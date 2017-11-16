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
var Page11 = require('./page11');
var Page12 = require('./page12');



var Pages = React.createClass({

  render: function(){
    return (
     <div id="pages" >
         {this.getShowPage()}
     </div>
    );
  },
    getShowPage: function(){
      if (this.props.page == 1) {
         return <Page1 data={this.props.data}></Page1>
      }else if (this.props.page == 2) {
          return <Page2 data={this.props.data}></Page2>
      }else if (this.props.page == 3) {
          return <Page3 data={this.props.data}></Page3>
      }else if (this.props.page == 4) {
          return <Page4 data={this.props.data}></Page4>
      }else if (this.props.page == 5) {
          return <Page5 data={this.props.data}></Page5>
      }else if (this.props.page == 6) {
          return <Page6 data={this.props.data}></Page6>
      }else if (this.props.page == 7) {
          return <Page7 data={this.props.data}></Page7>
      }else if (this.props.page == 8) {
          return <Page8 data={this.props.data}></Page8>
      }else if (this.props.page == 11) {
          return <Page11 data={this.props.data}></Page11>
      }else if (this.props.page == 12) {
          return <Page12 data={this.props.data}></Page12>
      }else{
          return <Page0 data={this.props.data}></Page0>
      }
    }
});

module.exports = Pages;
