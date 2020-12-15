import DS from 'ember-data';

export default DS.Model.extend({
    user:DS.belongsTo('user'),
    durationGoal:DS.attr("number"),
    distanceGoal:DS.attr("number"),
    
});
