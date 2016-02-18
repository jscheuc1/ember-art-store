import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  style: DS.attr('string'),
  subject: DS.attr('string'),
  medium: DS.attr('string'),
  size: DS.attr('string'),
  price: DS.attr('number'),
  artist: DS.belongsTo('artist', { async: true}),
  exhibition: DS.belongsTo('exhibition', { async: true})
});
