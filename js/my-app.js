var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Fuel Tracker',
  // Theme
  theme: 'ios',
  // App id
  id: 'app.1f600.fuel',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: routes,
  // ... other parameters
});

var $$ = Dom7;

var mainView = app.views.create('.view-main');

