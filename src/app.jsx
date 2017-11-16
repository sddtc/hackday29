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
                pageIndex= parseInt(pageId);


                let report = await store.getReport(consumerId);
                let reportEntity = report.entity

                React.render(
                    <Pages data={reportEntity} consumer={consumerId} page={pageId}> </Pages>,
                    appElement);

                var remover = document.querySelector('#index-script');
                remover && remover.parentNode.removeChild(remover);
                var indexScript = document.createElement('script');
                indexScript.setAttribute('src', 'https://img3.doubanio.com/f/ithil/02d77cfcbdb37694d81e8cba9bc1ecfc88297160/js/activity/index.js');
                indexScript.id = 'index-script';
                document.body.appendChild(indexScript);
            }
        }

    }
};

var router = Router(routes);

router.init();

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {
        //down
        pageIndex = pageIndex + 1;
        location.href = "#/report/" + consumerId + "/" + pageIndex
    } else if (event.keyCode == 38) {
        //up
        pageIndex = parseInt(pageIndex) > 0 ? pageIndex - 1 : pageIndex;
        location.href = "#/report/" + consumerId + "/" + pageIndex
    }
    console.log("pageIndex=" + pageIndex)
});
