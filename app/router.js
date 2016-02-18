import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pieces');
  this.route('artists');
  this.route('exhibitions');
});

export default Router;
