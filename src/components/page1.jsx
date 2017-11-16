var React = require('react');

var Page1 = React.createClass({

  render: function(){
      const maskStyle={opacity: 0.5};
    return (
        <div className="section top-10-widget " data-anchor="1">
            <div className="bg enable-animate">
                <div data-src="assets/images/landing-times.jpg" className="bg-img"></div>
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
                                            <div className="top-title">2017</div>
                                            <div className="bottom-title">Landing Times</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-content-wrapper">
                                        <div className="sub-title-wrapper clearfix">
                                            <div className="sub-title">
                                                <h2 className="min keyWord shake-constant shake-chunk" >
                                                    {this.props.data.login_count}
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
                        <p className="description">
                            2017, you keep a really good relationship with REA.
                        </p>
                        <div className="oneLine">
                            <p className="description">
                                REA remembers everyday you&nbsp;
                            </p>
                            <p className="n1">login</p><p>.</p>
                        </div>
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

module.exports = Page1;
