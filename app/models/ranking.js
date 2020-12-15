import DS from 'ember-data';

export default DS.Model.extend({
    performance:DS.belongsTo('ranking'),
    durationRank:DS.attr("number"),
    distanceRank:DS.attr("number"),
   
});
