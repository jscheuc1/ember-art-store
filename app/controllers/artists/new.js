// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//     addPiece(){
//       let model = this.get('model');
//       let piece = this.store.createRecord('piece');
//       model.get('pieces').addObject(piece);
//     }
//   }
// });

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addArtist(artist, newPiece){
      let piece = this.store.createRecord('piece', newPiece);
      piece.set('artist', artist);

      artist.save().then(()=>{

        piece.save().then(()=>{

          this.transitionToRoute('artists');
        });
      });
    }

  }
});
