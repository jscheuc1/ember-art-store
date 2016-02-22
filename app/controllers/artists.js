import Ember from 'ember';

export default Ember.Controller.extend({
  canshowAddArtist: false,
  actions:{
    addArtist(){
      this.set("newArtist", "");
      return true;
    },
    showAddArtist(){
      this.set("canShowAddArtist", true);
    },
    hideAddArtist(){
      this.set("canShowAddArtist", false);
    }
  }
});
