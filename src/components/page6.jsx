var React = require('react');

var Page6 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.1};
        const bgStyle = {background: '#f9c40f'}
        return (
            <div className="section top-10-widget " data-anchor="8">


                <div className="bg enable-animate" style={bgStyle}>
                    <div data-src="https://img3.doubanio.com/view/activity_page/raw/public/p92.jpg" className="bg-img"></div>
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
                                                <div className="top-title">2017 How Many Times</div>
                                                <div className="bottom-title">Have You Searched</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title-content-wrapper">
                                            <div className="sub-title-wrapper clearfix">
                                                <div className="sub-title">
                                                    <h2 className="min">
                                                        {this._search_count()} times
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
                            <span className="description">You have searched so many times through the whole year. Pretty sure you could get what you want here!</span>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className="horizontal-line"></div>
                    </div>
                </div>
            </div>
        );
    },
    _search_count: function(){
        return this.props.data.search_count_by_type.buy + this.props.data.search_count_by_type.rent + this.props.data.search_count_by_type.invest
    }
});

module.exports = Page6;