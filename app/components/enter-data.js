import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    store: service(),

    
      
      actions:{
       submitData: function(){
           let distance=this.get('distance');
           let duration=this.get('duration');
           let performance = this.store.createRecord('performance', {
               distance:distance,
               duration:duration,
                          
          });
    
       }

      }

});
