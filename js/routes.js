var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
    on: {
      pageBeforeIn: function (event, page) {
        // do something before page gets into the view
        populateAcc();
      }
    }
  },
];