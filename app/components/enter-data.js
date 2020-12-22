import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store: service(),
    actions: {
        submitData () {
            let performance = this.store.createRecord('performance', {
                distance: this.get('distance'),
                duration: this.get('duration'),
            });
            performance.save();
        }
    }
});
