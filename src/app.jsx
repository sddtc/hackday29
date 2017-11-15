var React = require('react');

var MyDiv = require('./components/my-div');
var store = require('./store');
var {Router} = require('director');

var appElement = document.getElementById('main');

var routes = {
    '/report': {
        '/:id': async function(id) {
            let report = await store.getReport(id);
            let data = report.entity;
            data.id=id
            React.render(
				<MyDiv data={data}/>,
                appElement);
        }

    }
};

var router = Router(routes);

router.init();
