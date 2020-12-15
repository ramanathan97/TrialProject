import Controller from '@ember/controller';


export default Controller.extend({
    actions:{
        createUser: function() {
            let name = this.get('name');
            let email = this.get('email');
            let age = this.get('age');
            let city = this.get('city');
            let state = this.get('state');
            let country = this.get('country');
            let password = this.get('password');

             
            let person = this.store.createRecord('person', {
              name:name,
              email: email,
              age: age,
              city:city,
              state:state,
              country:country,
              password: password
            });
      
           }
         }
    
    }
    
  );

