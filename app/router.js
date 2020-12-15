import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('first', function() {
    this.route('home');
  });

  this.route('parent', function() {
    this.route('child');
  });
  this.route('signup');
  this.route('performance');
  this.route('ranking');
});

export default Router;
