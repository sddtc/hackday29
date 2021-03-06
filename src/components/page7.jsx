var React = require('react');
var DownClick = require('./downclick');

var Page7 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget " data-anchor="7">
                <div className="bg enable-animate cb-slideshow">
                    <img data-src="assets/images/saved-properties.jpeg" className="bg-img"></img>
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
                                                <div className="bottom-title">Properties You Have Saved</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord shake-constant shake-slow" >
                                                        {this.props.data.saved_properties_count}
                                                    </h2>
                                                    <h3 className="min">
                                                        properties
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
                            <p className="description">Your responsibility is just to save the properties you are interested,</p>
                            <p>and leave other things to us,</p>
                            <div className="oneLine">
                                <p>we will&nbsp;</p>
                                <p className="n1">get you updated</p>
                                <p>&nbsp;without delay!</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                <DownClick consumer={this.props.consumer} page={this.props.page}></DownClick>
            </div>
        );
    }
});

module.exports = Page7;
