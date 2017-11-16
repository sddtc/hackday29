var React = require('react');

var Page4 = React.createClass({
  render: function(){
      const maskStyle={opacity: 0.1};
      const bgStyle={background: '#f9c40f'}
    return (
        <div className="section top-10-widget " data-anchor="5">




            <div className="bg enable-animate" style={bgStyle}>
                <div data-src="https://img1.doubanio.com/view/activity_page/raw/public/p278.jpg" className="bg-img"></div>
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
                                            <div className="top-title">2017 How Much Time</div>
                                            <div className="bottom-title">You Spent On REA</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-content-wrapper">
                                        <div className="sub-title-wrapper clearfix">
                                            <div className="sub-title">
                                                <h2 className="min">
                                                    {this.props.data.time_spend_on_rea} Hours
                                                </h2>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="description-section ">
                        <span className="description">Thanks for trusting REA, for spending time on REA. With your company, REA grows faster. And with REA's company, you could reap happiness! </span>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="horizontal-line"></div>
                </div>
            </div>
        </div>
      );
  }
});

module.exports = Page4;