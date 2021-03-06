var React = require('react');
var DownClick = require('./downclick');

var Page9 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget " data-anchor="9">

                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/notification.jpg" className="bg-img"></img>
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
                                                <div className="bottom-title">Notifications You Have Received</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite wobble" >
                                                        Emails: {this.props.data.notifications_count.email_count}
                                                    </h2>
                                                    <h2 className="min keyWord animated infinite wobble" >
                                                        Push: {this.props.data.notifications_count.push_count}
                                                    </h2>
                                                    <h3 className="min">
                                                        notifications
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
                                See that, we inform you without delay!
                            </p>
                            <p className="description">
                                You get some property updates or some saved search notifications.
                            </p>
                            <div className="oneLine">
                                <p className="description">We try to let you know all the&nbsp;</p>
                                <p className="n1">valuable</p>
                                <p>&nbsp;things!</p>
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
    }
});

module.exports = Page9;
