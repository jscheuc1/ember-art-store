import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pieces', function() {
    this.route('new');
    this.route('piece', {path: ":piece_id"});
  });
  this.route('artists', function() {
    this.route('new');
    this.route('artist', {path: ":artist_id"});
  });
  this.route('exhibitions', function() {
    this.route('new');
    this.route('exhibition', {path: ":exhibition_id"});
  });
});

export default Router;
