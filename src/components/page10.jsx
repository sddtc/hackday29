var React = require('react');

var Page10 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget " data-anchor="10">

                <div className="bg enable-animate">
                    <div data-src="assets/images/last-login.jpg" className="bg-img"></div>
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
                                                <div className="top-title keyWord">{this.props.data.latest_visited_at.substring(0,10)}</div>
                                                <div className="bottom-title">You must slept late.</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite bounceInDown">
                                                        {this.props.data.latest_visited_at.substring(11,19)} AM
                                                    </h2>
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
                                It's already {this.props.data.latest_visited_at.substring(11,19)} AM but you're still viewing properties.
                            </p>
                            <p className="description">
                                Warm hint:
                            </p>
                            <p className="description">
                                &nbsp;&nbsp;&nbsp;&nbsp;we know our website is really attractive, but go to bed early is good for your health.
                            </p>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>
                <img src="./assets/images/down.png" alt="Down" className="down-btn"/>
            </div>
        );
    }
});

module.exports = Page10;
