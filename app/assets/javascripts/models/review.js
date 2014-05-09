PDXFood2.Review = DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  rating: DS.attr(),
  cart: DS.belongsTo('cart', {async: true})
});

