import Ember from 'ember';
export default Ember.Route.extend({
  model(){
    return this.store.createRecord('piece');
  },
  actions: {
    addPiece(){
      let file = document.getElementById('file-field').files[0];
      this.set('model.asset', file);
      let piece = this.modelFor(this.routeName);
      piece.save().then((savedPiece) => {
        savedPiece.get('artists').invoke('save');
        this.transitionTo('pieces.piece', savedPiece);
      });
    }
  }
});
