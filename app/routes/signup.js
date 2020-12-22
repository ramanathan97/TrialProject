import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller, model) {
        controller.set('actions', {
            createUser: function() {
                if(this.get('name')==undefined||this.get('email')==undefined|| this.get('age')==undefined||this.get('city')==undefined||this.get('state')==undefined||this.get('country')==undefined||this.get('password')==undefined){
                 toastr.error('Please fill all the details')
                }
                else{
                  this.transitionToRoute('login')
                }
               let person = this.store.createRecord('user', {
                 name:this.get('name'),
                 email: this.get('email'),
                 age: this.get('age'),
                 city: this.get('city'),
                 state: this.get('state'),
                 country:this.get('country'),
                 password:  this.get('password')
               });
               person.save();
              }
        })
    }
});
