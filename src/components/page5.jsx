var React = require('react');
var DownClick = require('./downclick');

var Page5 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget brand-widget" data-anchor="5">

                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/saved-search.jpg" className="bg-img"></img>
                    <div className="mask" style={maskStyle}></div>
                    <div className="bottom-mask"></div>
                </div>

                <div className="content wrapper">
                    <div className="top-section clearfix ">

                        <div className="clearfix ">
                            <div className="title-section-wrapper left">
                                <table className="title-section left">
                                    <tbody>
                                    <tr className="top-column">
                                        <td colspan="2">
                                            <div className="title clearfix">
                                                <div className="top-title">2017 How Many</div>
                                                <div className="bottom-title">Search You Have Saved</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite fadeInLeft" >
                                                        {this.props.data.save_search_count*10}
                                                    </h2>
                                                    <h3 className="min">
                                                        saved searches
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
                            <div className="oneLine">
                                <p className="description">So glad that you are really&nbsp;</p>
                                <p className="n1">interested</p>
                                <p>&nbsp;at me.</p>
                            </div>
                            <p>
                                So many saved searches!
                            </p>
                            <p>
                                We will get you updated without delay.
                            </p>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                <DownClick consumer={this.props.consumer} page={this.props.page}></DownClick>
            </div>
        );
    }
});

module.exports = Page5;
