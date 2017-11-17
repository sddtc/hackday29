var React = require('react');

var DownClick = React.createClass({
    _getNextPage: function () {
        var current = parseInt(this.props.page);
        if (current > 14) {
            return 0;
        }
        return current + 1
    },

    _goNext: function (event) {
        event.preventDefault();
        location.href = "#/report/" + this.props.consumer + "/" + this._getNextPage();
    },
    _goTop: function (event) {
        event.preventDefault();
        location.href = "#/report/" + this.props.consumer + "/0";
    },

    render: function () {
        if (parseInt(this.props.page) == 15) {
            return (
                <img src="./assets/images/ic_backtop.png" alt="Top" className="down-btn" onClick={this._goTop}></img>
            );
        }
        return (
            <img src="./assets/images/down.png" alt="Down" className="down-btn" onClick={this._goNext}></img>
        );
    }
});

module.exports = DownClick;
