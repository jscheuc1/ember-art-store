import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    attachPiece(){
      this.toggleProperty('showAddPieceForm');
    },
    submit(){

      let artist = this.artist;
      let newPiece = {title: this.title, style: this.style, subject: this.subject, medium: this.medium,
        size: this.size, price: this.price};
      this.sendAction('action', artist, newPiece);

    }
  }
});
