var React = require('react');

var Page2 = React.createClass({
  render: function(){
      const maskStyle={opacity: 0.5};
    return (
        <div className="section top-10-widget " data-anchor="2">

            <div className="bg enable-animate" >
                <div data-src="assets/images/join-us.jpg" className="bg-img"></div>
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
                                            <div className="top-title">The Day</div>
                                            <div className="bottom-title">You Join Us</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-content-wrapper">
                                        <div className="sub-title-wrapper clearfix">
                                            <div className="sub-title">
                                                <h2 className="min keyWord animated infinite wobble">
                                                    {this.props.data.account_created_at}
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
                            It was a sunny day with blue sky and breeze.
                        </p>
                        <div className="oneLine">
                             <p>You came here to&nbsp;</p>
                             <p className="n1">join us.</p>
                         </div>
                        <p>From that day onwards, we would accompany you through the wonderful days. </p>
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

module.exports = Page2;