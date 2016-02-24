import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPiece(piece, newArtist){
      let artist = this.store.createRecord('artist', newArtist);
      let file = document.getElementById('file-field').files[0];
      piece.set('asset', file);
      piece.set('artist', artist);
      artist.save().then(()=>{
        piece.save().then(()=>{
          this.transitionToRoute('pieces');
        });
      });
    }

  }
});
