var React = require('react');

var Page4 = React.createClass({
    _goNext: function (consumerId) {
        console.log(consumerId);
        location.href = "#/report/" + consumerId + "/" + 5
    },

  render: function(){
      const maskStyle={opacity: 0.5};
    return (
        <div className="section top-10-widget " data-anchor="4">

            <div className="bg enable-animate cb-slideshow">
                <img data-src="assets/images/times.jpg" className="bg-img"></img>
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
                                            <div className="top-title">2017 How Much</div>
                                            <div className="bottom-title">Time You Spent On REA</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-content-wrapper">
                                        <div className="sub-title-wrapper clearfix">
                                            <div className="sub-title">
                                                <h2 className="min keyWord animated infinite swing" >
                                                    {this.props.data.time_spend_on_rea.hours}
                                                </h2>
                                                <h3 className="min">
                                                    hours
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
                            <p className="description">
                                Thanks for&nbsp;
                            </p>

                            <p className="n1"> trusting&nbsp;</p>
                            <p>REA,&nbsp;</p>
                            <p className="description">for spending time on REA.</p>
                            <p>With your company, REA grows faster.</p>
                            <p className="description">
                            And with REA's company, you could reap&nbsp;
                            </p>
                            <p className="n1">happiness</p><p>!</p>
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

module.exports = Page4;
