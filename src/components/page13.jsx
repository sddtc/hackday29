var React = require('react');

var Page13 = React.createClass({
    _goNext: function (consumerId) {
        console.log(consumerId);
        location.href = "#/report/" + consumerId + "/" + 14;
    },

    render: function () {
        const maskStyle = {opacity: 0.2};
        return (
            <div className="section top-10-widget " data-anchor="13">
                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/shared.jpg" className="bg-img"></img>
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
                                                <div className="bottom-title">Times You Have Shared</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite rubberBand" >
                                                        {this.props.data.sns_shared_count}
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
                            <div className="oneLine">
                                <p className="description">You have shared so many times to&nbsp;</p>
                                <p className="n1">social platform</p><p>.</p>
                            </div>
                            <div className="oneLine">
                                <p className="description">Thanks for your&nbsp;</p>
                                <p className="n1">recognition</p>
                                <p>, we will continue growing!</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                <img src="./assets/images/down.png" alt="Down" className="down-btn" onClick={(e) => (e.preventDefault(), this._goNext(1000001))}></img>
            </div>
        );
    }
});

module.exports = Page13;
