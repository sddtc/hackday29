var React = require('react');

var Page4 = React.createClass({
  render: function(){
      const maskStyle={opacity: 0.5};
    return (
        <div className="section top-10-widget " data-anchor="4">




            <div className="bg enable-animate">
                <div data-src="assets/images/times.jpg" className="bg-img"></div>
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
                                                    {this.props.data.time_spend_on_rea}
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
                        <p className="description">
                            Thanks for trusting REA, for spending time on REA.
                        </p>
                        <p className="description">
                            With your company, REA grows faster.
                        </p>
                        <p className="description">
                            And with REA's company, you could reap happiness!
                        </p>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="horizontal-line"></div>
                </div>
            </div>

            <img src="./assets/images/down.png" alt="Down" className="down-btn"></img>
        </div>
      );
  }
});

module.exports = Page4;
