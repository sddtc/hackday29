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
var Page9 = require('./page9');
var Page10 = require('./page10');
var Page11 = require('./page11');
var Page12 = require('./page12');
var Page13 = require('./page13');
var Page14 = require('./page14');
var Page15 = require('./page15');


var store = require('../store');

var Pages = React.createClass({
        render: function () {
            return (
                <div id={"pages" + this._getPageNo()}>
                    {this._getShowPage()}
                </div>
            );
        },
        _getShowPage: function () {
            if (this._getPageNo() == 1) {
                return <Page1 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page1>
            } else if (this._getPageNo() == 2) {
                return <Page2 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page2>
            } else if (this._getPageNo() == 3) {
                return <Page3 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page3>
            } else if (this._getPageNo() == 4) {
                return <Page4 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page4>
            } else if (this._getPageNo() == 5) {
                return <Page5 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page5>
            } else if (this._getPageNo() == 6) {
                return <Page6 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page6>
            } else if (this._getPageNo() == 7) {
                return <Page7 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page7>
            } else if (this._getPageNo() == 8) {
                return <Page8 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page8>
            } else if (this._getPageNo() == 9) {
                return <Page9 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page9>
            } else if (this._getPageNo() == 10) {
                return <Page10 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page10>
            } else if (this._getPageNo() == 11) {
                return <Page11 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page11>
            } else if (this._getPageNo() == 12) {
                return <Page12 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page12>
            } else if (this._getPageNo() == 13) {
                return <Page13 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page13>
            } else if (this._getPageNo() == 14) {
                return <Page14 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page14>
            } else if (this._getPageNo() == 15) {
                return <Page15 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}></Page15>
            } else {
                return <Page0 data={this._getData()} page={this._getPageNo()} consumer={this.props.consumer}>></Page0>
            }
        },
        _getPageNo: function () {
            return this.props.page
        },
    _getData: function(){
            return this.props.data;
    }
    });

module.exports = Pages;
