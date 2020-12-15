import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
   
    actions:{
        submitData: function(){
            let distancegoal=this.get('distancegoal');
            let durationgoal=this.get('durationgoal');
            let goal = this.store.createRecord('goal', {
                distanceGoal:distancegoal,
                durationGoal:durationgoal,
                           
           });
     
        }
    }
 
});
