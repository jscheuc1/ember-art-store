import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPiece(){
      let model = this.get('model');
      let piece = this.store.createRecord('piece');
      model.get('pieces').addObject(piece);
    }
  }
});
