var React = require('react');

var Page7 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.2};
        const bgStyle = {background: '#f9c40f'}
        return (
            <div className="section top-10-widget " data-anchor="9">

                <div className="bg enable-animate" style={bgStyle}>
                    <div data-src="https://img3.doubanio.com/view/activity_page/raw/public/p94.jpg" className="bg-img"></div>
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
                                                <div className="bottom-title">Properties Have You Saved</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="">
                                                        {this.props.data.saved_properties_count}
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
                            <span className="description">Your responsibility is just to save the properties you are interested, and leave other things to us, we will get you updated without delay!</span>
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

module.exports = Page7;