var React = require('react');
var DownClick = require('./downclick');

var Page6 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget " data-anchor="6">


                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/search-time.jpg" className="bg-img"></img>
                    <div className="mask" style={maskStyle}></div>
                    <div className="bottom-mask"></div>
                </div>

                <div className="content wrapper">
                    <div className="top-section clearfix ">

                        <div className="clearfix ">
                            <div className="title-section-wrapper right">
                                <table className="title-section right">
                                    <tbody>
                                    <tr className="top-column">
                                        <td colspan="2">
                                            <div className="title clearfix">
                                                <div className="top-title">2017 How Many</div>
                                                <div className="bottom-title">Times You Have Searched</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite zoomInUp" >
                                                        {this._search_count()}
                                                    </h2>
                                                    <h3 className="min">
                                                        times
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="description-section message-description">
                            <p className="description">
                                You have searched so many times through the whole year.
                            </p>
                            <div className="oneLine">
                                <p className="description">Pretty sure you could get&nbsp;</p>
                                <p className="n1">what you want</p>
                                <p>&nbsp;here!</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                <DownClick consumer={this.props.consumer} page={this.props.page}></DownClick>
            </div>
        );
    },
    _search_count: function(){
        return (this.props.data.search_count_by_type.buy + this.props.data.search_count_by_type.rent + this.props.data.search_count_by_type.invest)*110
    }
});

module.exports = Page6;
