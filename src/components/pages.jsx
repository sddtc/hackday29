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

        getInitialState: function () {
            return {data: {}, page: this.props.page};
        },
        componentDidMount: function () {
            this._getReport();
        },
        render: function () {
            if (JSON.stringify(this.state.data) == "{}") {
                return this._getDefaultDiv()
            }
            return (
                <div id={"pages" + this._getPageNo()}>
                    {this._getShowPage()}
                </div>
            );
        },
        _getDefaultDiv: function () {
            return <div>Loding</div>
        },
        componentDidMount: function () {
            this._getReport();
        },
        _getReport: async function () {
            var resp = await store.getReport(this.props.consumer);
            this.setState({data: resp.entity});
        },
        _getShowPage: function () {
            if (this._getPageNo() == 1) {
                return <Page1 data={this.state.data}></Page1>
            } else if (this._getPageNo() == 2) {
                return <Page2 data={this.state.data}></Page2>
            } else if (this._getPageNo() == 3) {
                return <Page3 data={this.state.data}></Page3>
            } else if (this._getPageNo() == 4) {
                return <Page4 data={this.state.data}></Page4>
            } else if (this._getPageNo() == 5) {
                return <Page5 data={this.state.data}></Page5>
            } else if (this._getPageNo() == 6) {
                return <Page6 data={this.state.data}></Page6>
            } else if (this._getPageNo() == 7) {
                return <Page7 data={this.state.data}></Page7>
            } else if (this._getPageNo() == 8) {
                return <Page8 data={this.state.data}></Page8>
            } else if (this.props.page == 9) {
                return <Page9 data={this.state.data}></Page9>
            } else if (this.props.page == 10) {
                return <Page10 data={this.state.data}></Page10>
            } else if (this.props.page == 11) {
                return <Page11 data={this.state.data}></Page11>
            } else if (this.props.page == 12) {
                return <Page12 data={this.state.data}></Page12>
            } else if (this.props.page == 13) {
                return <Page13 data={this.state.data}></Page13>
            } else if (this.props.page == 14) {
                return <Page14 data={this.state.data}></Page14>
            } else if (this.props.page == 15) {
                return <Page15 data={this.state.data}></Page15>
            } else {
                return <Page0 data={this.state.data}></Page0>
            }
        },
        _getPageNo: function () {
            return this.props.page
        }
    });

module.exports = Pages;
