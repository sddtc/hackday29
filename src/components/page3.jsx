var React = require('react');

var Page3 = React.createClass({

        render: function () {
            const maskStyle = {opacity: 0.1};
            var propertiesCom = this.properties().map((p, i) => {
                return  <a target="_blank" href={p.listing_url.href} className="subject " data-title={p.listing_address}>
                    <span className="num">{i + 1}</span>
                    <div className="img">
                        <img data-src={p.listing_main_photo} src={"//:" + i} alt={p.listing_address}/>
                    </div>
                    <div className="cover">
                        <div className="cover-inner">
                            <p>{p.listing_address}</p>
                        </div>
                    </div>
                </a>
            });
            return (
                <div className="section top-10-widget " data-anchor="3">


                    <div className="bg enable-animate">
                        <div data-src="assets/images/most-visited.jpg" className="bg-img"></div>
                        <div className="mask" style={maskStyle} ></div>
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
                                                    <div className="top-title">2017 The Property</div>
                                                    <div className="bottom-title">You Visited Most Times</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="title-content-wrapper">
                                                <div className="sub-title-wrapper clearfix">
                                                    <div className="sub-title">
                                                        <h2 className="min shake-slow shake-constant shake-constant--hover">
                                                            <a target="_blank" className="keyWord" href={this._favorite().listing_url.href}>{this._favorite().listing_address}</a>
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
                                    It must be a really special property for you, since you have viewed this property so many times.
                                </p>
                                <p>New year, just go to get it! </p>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <div className="horizontal-line"></div>
                            <div className="subjects-section">
                                <div className="subjects-wrapper clearfix">

                                    {propertiesCom}
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src="./assets/images/down.png" alt="Down" className="down-btn"></img>
                </div>
            );
        },
        properties: function () {
            return this.props.data.most_viewed_properties;
        },
        _favorite: function () {
            return this.properties()[0];
        }
    });

module.exports = Page3;
