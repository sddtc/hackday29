var React = require('react');

var Page8 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget " data-anchor="8">

                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/collections.jpeg" className="bg-img"></img>
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
                                                <div className="bottom-title">Collections You Have Created</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite lightSpeedIn" >
                                                        {this.props.data.collection_created_count}
                                                    </h2>
                                                    <h3 className="min">
                                                        collections
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
                                <p className="description">As you know, collection is a&nbsp;</p>
                                <p className="n1">new</p>
                                <p>&nbsp;feature this year,</p>
                            </div>
                            <p>and I'm pretty sure you won't miss it!</p>
                            <div className="oneLine">
                                <p className="description">Let's&nbsp;</p>
                                <p className="n1">improve</p>
                                <p>&nbsp;together!</p>
                            </div>
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
