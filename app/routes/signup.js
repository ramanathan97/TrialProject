import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    ajax: service(),
    setupController(controller, model) {
        this._super(controller, model);
        let route = this;
        controller.set('actions', {
            createUser: function() {
                let val;           
               let person = this.store.createRecord('user', {
                 name:this.get('name'),
                 email: this.get('email'),
                 age: this.get('age'),
                 city: this.get('city'),
                 state: this.get('state'),
                 country:this.get('country'),
                 password:  this.get('password')
               });
              val= person.save();
              
            val.then(value => {
                  console.log(value)
                  if (value == true){
                      this.transitionToRoute('login');
                  }
                  else
                  toastr.error('Some Error occured')
              }
              )
              },

            
        })
    }
});

