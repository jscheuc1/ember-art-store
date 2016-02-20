import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('exhibition');
  },
  actions: {
    submit: function(){
      var controller = this;
      this.get('exhibition.location').set('exhibition.location', new Date());
      this.get('exhibition.location').save().then(function(review){
        controller.get('model.exhibition').addObject(review);
      });
    }
  }
});
