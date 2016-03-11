import Ember from 'ember';

export default Ember.Route.extend({

model(){
    let newUser = this.store.createRecord('user');
    return newUser;
},
actions: {
save(){
    let user = this.modelFor(this.routeName);
      user.save().then(() => {
             this.transitionTo("users.user", user);
            });
      }
}
});
