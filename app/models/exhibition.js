import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  title: DS.attr('string'),
  pieces: DS.hasMany('piece', { async: true})
});
