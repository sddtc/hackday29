var React = require('react');

var Pages = require('./components/pages');
var store = require('./store');
var {Router} = require('director');

var appElement = document.getElementById('main');


var routes = {
    '/report': {
            '/:id': async function(id) {
                let report = await store.getReport(id);
                let reportEntity = report.entity;
                reportEntity.id=id;
                React.render(
                    <Pages data={reportEntity}> </Pages>,
                    appElement);
            }

    }
};

var router = Router(routes);

router.init();
