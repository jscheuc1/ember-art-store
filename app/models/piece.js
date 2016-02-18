import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  style: DS.attr('string'),
  subject: DS.attr('string'),
  medium: DS.attr('string'),
  size: DS.attr('string'),
  price: DS.attr('number'),
  artist: DS.belongsTo('artist'),
  exhibition: DS.belongsTo('exhibition')
});
