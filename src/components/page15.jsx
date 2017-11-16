var React = require('react');

var Page15 = React.createClass({
    render: function () {
        const maskStyle = {opacity: 0.1};
        return (
            <div className="section end-page-widget" data-anchor="15">

                <div className="bg enable-animate">
                    <div data-src="https://img3.doubanio.com/f/movie/094989aabe419e1b90a2ba84b771140132419208/deploy/movie/movie10th-deploy/pics/bg/p8.jpg" className="bg-img"></div>
                    <div className="mask" style={maskStyle}></div>
                    <div className="bottom-mask"></div>
                </div>


                <div className="content wrapper end-wrapper table">
                    <div className="table-cell middle center">

                        <h1 className="loader">
                            <span>W</span>
                            <span>i</span>
                            <span>t</span>
                            <span>h</span>
                            <span> </span>
                            <span>Y</span>
                            <span>o</span>
                            <span>u</span>
                        </h1>
                        <div className="text-wrapper">
                            <div className="text message-description" data-selector="p">
                                <p>Looking back at 2017, REA brings us surprise and touch.</p>
                                <p>REA witness with you, help you to have a better experience over finding properties.</p>
                                <p>In the future, please continue to walk with REA!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page15;
