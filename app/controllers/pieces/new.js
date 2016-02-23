import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPiece(piece, newArtist){
      let artist = this.store.createRecord('artist', newArtist);
      piece.set('artist', artist);
      artist.save().then(()=>{
        piece.save().then(()=>{
          this.transitionToRoute('pieces');
        });
      });
    }

  }
});
