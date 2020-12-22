import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store: service(),
    actions: {
        submitData() {
            let goal = this.store.createRecord('goal', {
                distanceGoal: this.get('distancegoal'),
                durationGoal: this.get('durationgoal'),
            });
            goal.save();
        }
    }
});
