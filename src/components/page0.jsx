var React = require('react');


var Page0 = React.createClass({
    _goNext: function (consumerId) {
        console.log(consumerId);
        location.href = "#/report/" + consumerId + "/" + 1
    },

    render: function(){
        const bg = {background: '#000'};
        const maskStyle = {opacity: 0.85};
        return (
             <div className="section start-page-widget" data-anchor="0">
              <div className="bg enable-animate" style={bg}>
                  <div className="bg-items clearfix">
                      <div className="bg-items-inner">
                          <div className="bg-item" data-src="./assets/images/hackday29-bgm1.jpg"></div>
                      </div>
                  </div>
                  <div className="mask" style={maskStyle}></div>
                  <div className="bottom-mask"></div>
              </div>

              <div className="table content center">
                  <div className="table-cell middle">
                      <div className="title-section">

                          <img data-src="./assets/images/accompany.png" src="//:0" alt="title" className="title-img "></img>
                      </div>
                      <p className="description container" data-in-effect="bounceIn">based on consumer's data and house mark of 2017 (statistics up to 2017-12-25)</p>
                  </div>
              </div>

              <img src="./assets/images/down.png" alt="Down" className="down-btn" onClick={(e) => (e.preventDefault(), this._goNext(1000001))}></img>

          </div>
        );
    }
});
module.exports = Page0;