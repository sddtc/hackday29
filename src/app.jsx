var React = require('react');

var Pages = require('./components/pages');
var store = require('./store');
var {Router} = require('director');

var appElement = document.getElementById('main');

var pageIndex = 0;

var consumerId = 0;


var routes = {
    '/report': {
        '/:id': {
            '/:pageId': async function (id, pageId) {
                consumerId = id;
                pageIndex=pageId;
                let report = await store.getReport(id);
                let reportEntity = report.entity;
                reportEntity.id = id;
                React.render(
                    <Pages data={reportEntity} page={pageId} key={pageId}> </Pages>,
                    appElement);
            }
        }

    }
};

var router = Router(routes);

router.init();

document.addEventListener('keydown', function (event) {
    //up
    if (event.keyCode == 38) {
        pageIndex = pageIndex + 1;
        location.href = "#/report/" + consumerId + "/" + pageIndex
    } else if (event.keyCode == 40) {
        //down
        pageIndex = pageIndex > 0 ? pageIndex - 1 : pageIndex;
        location.href = "#/report/" + consumerId + "/" + pageIndex
    }
    console.log("pageIndex=" + pageIndex)
});
