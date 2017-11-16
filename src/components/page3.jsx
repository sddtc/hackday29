var React = require('react');

var Page3 = React.createClass({

        render: function () {
            const maskStyle = {opacity: 0.1};
            return (
                <div className="section top-10-widget " data-anchor="3">


                    <div className="bg enable-animate">
                        <div data-src="assets/images/most-visited.jpg" className="bg-img"></div>
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
                                                    <div className="top-title">2017 The Most Visited</div>
                                                    <div className="bottom-title">Property You Have Ever Seen</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="title-content-wrapper">
                                                <div className="sub-title-wrapper clearfix">
                                                    <div className="sub-title">
                                                        <h2 className="min">
                                                            <a target="_blank" className="keyWord"
                                                               href={this._favorite().listing_url}>{this._favorite().listing_id}</a>
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
                                <span className="description">It must be a really special property for you, since you have viewed this property so many times. New year, just go to get it! </span>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <div className="horizontal-line"></div>
                            <div className="subjects-section">
                                <div className="subjects-wrapper clearfix">

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-apartment-vic-richmond-126973742"
                                       className="subject " data-title="Richmond Vic 3121">
                                        <span className="num">1</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/09f164f75e6827e430edbbdaa1c3c6d15b3a2fb718b5bb890e4e1c98533bbc70/main.jpg"
                                                src="//:0" alt="Richmond Vic 3121"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>Richmond Vic 3121</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-sa-keyneton-126969774"
                                       className="subject " data-title="23 Angaston-Swan Reach">
                                        <span className="num">2</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/add9af7fab9417e2e4997be4541f40a51690bec6a3515a02809ce78a958c5f5c/main.jpg"
                                                src="//:0" alt="23 Angaston-Swan Reach"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>23 Angaston-Swan Reach</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-nsw-lalor+park-126818026"
                                       className="subject " data-title="41 Northcott Road">
                                        <span className="num">3</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/0ebc77f18f9bd249c6a73b79ed3f61bf3c604ce94a2ae1d412f7da1375b21f6c/main.jpg"
                                                src="//:0" alt="41 Northcott Road"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>41 Northcott Road</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-nsw-rutherford-126973442"
                                       className="subject " data-title="29 Cagney Road">
                                        <span className="num">4</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/c52d0e07b21740968219fefb820920c6e6f865fe26f09fecdc378d67fcd8a207/main.jpg"
                                                src="//:0" alt="29 Cagney Road"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>29 Cagney Road</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-qld-gympie-126670442"
                                       className="subject " data-title="12 Jaryd Place">
                                        <span className="num">5</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/60a7bec4a7c0554fdaa150455e5ed981972dcc9b596d06837fede7061d9f0e6f/main.jpg"
                                                src="//:0" alt="12 Jaryd Place"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>12 Jaryd Place</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-qld-beachmere-126514262"
                                       className="subject " data-title="2/5b Biggs Avenue">
                                        <span className="num">6</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i2.au.reastatic.net/800x600/753d674201effe61da945cbc7ba1ef84daebc0f444277292de0f0724c6ddbbec/main.jpg"
                                                src="//:0" alt="2/5b Biggs Avenue"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>2/5b Biggs Avenue</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-unit-wa-jolimont-125833834"
                                       className="subject " data-title="3 & 4/3 Roberta Street">
                                        <span className="num">7</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i2.au.reastatic.net/800x600/5448b555a0346258348ad95598dfb2c5efb68cab7220baa70f00126baf218e87/main.jpg"
                                                src="//:0" alt="3 & 4/3 Roberta Street"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>3 & 4/3 Roberta Street</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-apartment-nsw-zetland-126817962"
                                       className="subject " data-title="807/17 Gadigal Avenue">
                                        <span className="num">8</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/9bd4aafc53ce461e0de1b8790013b6e434d70585046b4a1c1d924d68f915302b/main.jpg"
                                                src="//:0" alt="807/17 Gadigal Avenue"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>807/17 Gadigal Avenue</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-nt-braitling-126664438"
                                       className="subject " data-title="4 Priest Street">
                                        <span className="num">9</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/29f138cbec2516732d81a9fc1bf85fd09de91d336e0a906a9b5da08c25e7e12c/main.jpg"
                                                src="//:0" alt="4 Priest Street"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>4 Priest Street</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a target="_blank"
                                       href="https://www.realestate.com.au/property-house-nsw-byron+bay-126679838"
                                       className="subject " data-title="6/1-5 Keats Street">
                                        <span className="num">10</span>
                                        <div className="img">
                                            <img
                                                data-src="https://i3.au.reastatic.net/800x600/03543ac8fda40122d74f32a8a660b473c4243c5941d2d2ca547d6efc2efa7798/main.jpg"
                                                src="//:0" alt="6/1-5 Keats Street"/>
                                        </div>
                                        <div className="cover">
                                            <div className="cover-inner">
                                                <p>6/1-5 Keats Street</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
        properties: function () {
            return this.props.data.most_viewed_properties;
        },
        _favorite: function () {
            return this.properties()[0];
        }
    })
    ;

module.exports = Page3;