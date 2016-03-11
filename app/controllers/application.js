import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout(){
      this.get('session').invalidate();
    },
    getProfile(){
      this.store.findRecord('user', 'me').then((user)=>{
        this.transitionToRoute('users.user', user);
      });
    }

  },
updateCurrentUser: function () {

 if (this.get("session.isAuthenticated")){
   this.get('store').findRecord('user', "me").then((user)=>{
     this.transitionToRoute('users.user', user);
   });
 }
}.on('init')
});
