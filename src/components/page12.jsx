var React = require('react');

var Page12 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.2};
        const bgStyle = {background: '#f9c40f'}
        return (
            <div className="section top-10-widget " data-anchor="12">

                <div className="bg enable-animate" style={bgStyle}>
                    <div data-src="assets/images/type.jpeg" className="bg-img"></div>
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
                                                <div className="top-title">2017 The Most Attractive</div>
                                                <div className="bottom-title">Property Type For You</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite tada">
                                                        {this.props.data.preferred_property_type}
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
                                Based on your search, we analysed that your favorite property type is {this.props.data.preferred_property_type}.
                            </p>
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

module.exports = Page12;
