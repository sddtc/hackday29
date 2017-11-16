var React = require('react');

var MyDivFirst = require('./components/my-div-first');
var store = require('./store');
var {Router} = require('director');

var appElement = document.getElementById('my-div-first');

var routes = {
    '/report': {
        '/:id': async function(id) {
            let report = await store.getReport(id);
            let data = report.entity;
            data.id=id
            React.render(
				<MyDivFirst data={data}/>,
                appElement);

            // React.render(
            //     <MyDivFirst data={data}/>,
            //     appElement);
        }

    }
};

var router = Router(routes);

router.init();
