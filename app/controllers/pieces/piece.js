import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePiece(piece, newArtist){
      let artist = this.store.createRecord('artist', newArtist);
      artist.set('piece', piece);
      piece.save().then(()=>{
        artist.save().then(()=>{
          this.transitionToRoute('pieces');
        });
      });
    }

  }
});
