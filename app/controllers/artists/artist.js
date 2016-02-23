import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateArtist(artist, newPiece){
      let piece = this.store.createRecord('piece', newPiece);
      piece.set('artist', artist);

      artist.save().then(()=>{

        piece.save().then(()=>{

          this.transitionToRoute('pieces');
        });
      });
    }

  }
});
