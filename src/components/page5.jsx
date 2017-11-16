var React = require('react');

var Page5 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.5};
        return (
            <div className="section top-10-widget brand-widget" data-anchor="5">

                <div className="bg enable-animate">
                    <div data-src="assets/images/saved-search.jpg" className="bg-img"></div>
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
                                                <div className="bottom-title">Search You Have Saved</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min keyWord animated infinite fadeInLeft" >
                                                        {this.props.data.save_search_count}
                                                    </h2>
                                                    <h3 className="min">
                                                        saved searches
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
                                So glad that you are really interested at me!
                            </p>
                            <p>
                                So many saved searches!
                            </p>
                            <p>
                                We will get you updated without delay!
                            </p>
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