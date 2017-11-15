var client = require('./client');
var store={};

// var authclient = function(opt) {
//   //var loading = document.getElementById('loading')
//   //loading.style.display='block'
//   return client(opt).then(function(resp) {
//     //loading.style.display='none'
//   })
// };

store.getReport = function(id){
  return client({method:'GET', path: 'fake_response.json'});
};

module.exports = store;
