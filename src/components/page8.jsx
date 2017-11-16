var React = require('react');

var Page8 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.2};
        const bgStyle = {background: '#f9c40f'}
        return (
            <div className="section top-10-widget " data-anchor="10">

                <div className="bg enable-animate" style={bgStyle}>
                    <div data-src="https://img3.doubanio.com/view/activity_page/raw/public/p94.jpg" className="bg-img"></div>
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
                                                <div className="top-title">2017 How Many</div>
                                                <div className="bottom-title">Collections Have You Created</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="">
                                                        {this.props.data.collection_created_count} collections
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
                            <span className="description">As you know, collection is a new feature this year, and I'm pretty sure you won't miss it! Let's improve together!</span>
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

module.exports = Page8;