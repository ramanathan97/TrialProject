import Controller from '@ember/controller';


export default Controller.extend({
    actions:{
        checkUser: function() {
            let currentmail = this.get('email');
            let currentpassword = this.get('password');

             let persons = this.store.findAll('user');
             persons.then(function(value){
                 value.forEach(element=>{
                     if(element.email==currentmail&&element.password==currentpassword){
                         window.location = "http://localhost:4200/performance"

                     }
                     
                 })
               }) 
             
        }
    }
    
   
});

