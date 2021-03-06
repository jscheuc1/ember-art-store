import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  bio: DS.attr('string'),
  asset: DS.attr('file'),
  pieces: DS.hasMany('piece', { async: true})
});
