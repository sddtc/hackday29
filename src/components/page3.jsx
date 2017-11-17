var React = require('react');
var DownClick = require('./downclick');

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


                    <div className="bg enable-animate cb-slideshow">
                        <img data-src="assets/images/most-visited.jpeg" className="bg-img"></img>
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
                                <div className="oneLine">
                                    <p className="description">It must be a really&nbsp;</p>
                                    <p className="n1">special</p><p>&nbsp;property for you,</p>
                                    <p>since you have viewed this property so many times.</p>
                                    <p className="description">New year, just go to get it! </p>
                                </div>
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

                    <DownClick consumer={this.props.consumer} page={this.props.page}></DownClick>
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
