var React = require('react');

var Page1 = React.createClass({
  render: function(){
      const maskStyle={opacity: 0.5}
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
                        <div className="title-section-wrapper left shake-crazy shake-freeze">
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
                                                <h2 className="min keyWord" >
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
                    <div className="description-section ">
                        <span className="description" >2017, you keep a really good relationship with REA. REA remembers everyday you login.</span>
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

module.exports = Page1;