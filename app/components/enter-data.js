import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store: service(),
    actions: {
        submitData (duration,distance) {
            if(duration<0||distance<0){
                toastr.error('Please enter valid data');
            } else{
                this.store.createRecord('performance', {
                    distance: distance,
                    duration: duration,
                }).save();  
            }
        }
    }
});
