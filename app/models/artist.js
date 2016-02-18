import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  bio: DS.attr('text'),
  pieces: DS.hasMany('piece', { async: true})
});
