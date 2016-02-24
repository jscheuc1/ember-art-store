import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addArtist(artist, newPiece){
      let piece = this.store.createRecord('piece', newPiece);
      let file = document.getElementById('file-field').files[0];
      artist.set('asset', file);
      piece.set('artist', artist);
      artist.save().then(()=>{
        piece.save().then(()=>{
          this.transitionToRoute('artists');
        });
      });
    }

  }
});
