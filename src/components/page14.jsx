var React = require('react');

var Page14 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.1};
        return (
            <div className="section top-10-widget " data-anchor="14">

                <div className="bg enable-animate">
                    <div data-src="assets/images/agent.jpeg" className="bg-img"></div>
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
                                                <div className="top-title">2017 The Agent</div>
                                                <div className="bottom-title">You Contact Most Frequently</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord shake-slow shake-constant shake-constant--hover">
                                                        <a target="_blank" className="keyWord" href={this.props.data.preferred_agency.agency_profile}>{this.props.data.preferred_agency.agency}</a>
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
                                <p className="description">You contact this agent most&nbsp;</p>
                                <p className="n1">frequently</p>
                                <p>, they must have a</p>
                            </div>
                            <p>good service.</p>
                            <div className="oneLine">
                                <p className="description">Hope you could get enough&nbsp;</p>
                                <p className="n1">information</p>
                                <p>&nbsp;here!</p>
                            </div>
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

module.exports = Page14;
