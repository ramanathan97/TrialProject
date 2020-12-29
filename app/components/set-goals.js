import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store: service(),
    actions: {
        submitData(durationgoal,distancegoal) {
            if(durationgoal<0||distancegoal<0){
                toastr.error('Please enter valid goals');
            } else {
                this.store.createRecord('goal', {
                    distanceGoal:distancegoal,
                    durationGoal:durationgoal,
                }).save();       
            }                     
        }       
    }
});
