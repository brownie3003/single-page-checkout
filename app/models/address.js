import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    companyName: DS.attr('string'),
    firstLine: DS.attr('string'),
    secondLine: DS.attr('string'),
    thirdLine: DS.attr('string'),
    city: DS.attr('string'),
    county: DS.attr('string'),
    postcode: DS.attr('string'),
    country: DS.attr('string'),
    orders: DS.hasMany('order', { async: true })
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Stephen",
            lastName: "Hemmingswiggle",
            companyName: "Hipster Inc.",
            firstLine: "123 Dalston",
            city: "London",
            postcode: "E8 4RQ",
            orders: [1]
        },
        {
            id: 2,
            firstName: "Andy",
            lastName: "Brown",
            firstLine: "123 Bethnal Green",
            city: "London",
            postcode: "E2 4RQ",
            orders: [1]
        }
    ]
});
