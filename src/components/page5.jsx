var React = require('react');

var Page5 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.1};
        const bgStyle = {background: '#f9c40f'}
        return (
            <div className="section top-10-widget brand-widget" data-anchor="6">


                <div className="bg enable-animate" style={bgStyle}>
                    <div data-src="https://img1.doubanio.com/view/activity_page/raw/public/p647.jpg"
                         className="bg-img"></div>
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
                                                <div className="bottom-title">Search Have You Saved</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min">
                                                        {this.props.data.save_search_count}
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
                            <span className="description">So glad that you are really interested at me! So many saved searches! We will get you updated without delay!  </span>
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

module.exports = Page5;