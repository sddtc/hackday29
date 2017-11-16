var React = require('react');

var Page11 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.2};
        const bgStyle = {background: '#f9c40f'};
        return (
            <div className="section top-10-widget " data-anchor="11">

                <div className="bg enable-animate" style={bgStyle}>
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
                                                <div className="top-title">2017 The District</div>
                                                <div className="bottom-title">You Love Most</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite bounceIn">
                                                        {this.props.data.preferred_region.split("-")[0]}
                                                    </h2>
                                                    <h2 className="min keyWord animated infinite bounceIn">
                                                        - {this.props.data.preferred_region.split("-")[1]}
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
                            <div className="oneLine">
                                <p className="description">What you searched most are all located in this&nbsp;</p>
                                <p className="n1">district</p><p>.</p>
                            </div>
                            <p className="description">
                                We will continue keep you in touch for updates about this district!
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

module.exports = Page11;
