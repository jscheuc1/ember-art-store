import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    addPiece(){
      let piece = this.modelFor(this.routeName);
      piece.save().then((savedPiece) => {
        savedPiece.get('artists').invoke('save');
        this.transitionTo('pieces.piece', savedPiece);
      });
    }
  }


});
