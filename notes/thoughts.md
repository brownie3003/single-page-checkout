#Thoughts

Thoughts about assumptions I've made in the prototype.

###Pricing

- Original Price = The basic price of an item before any discounts have been applied.
- Final Price = The price we will be charging a customer for a product, which includes sale + bulk item discounts.

I'd like to keep promo separate. I think it would be good if we could give a cart & promocode to pricing service and it will
return a discount, which can be applied as 1 line item to the bill. It's an over simplification that may not be possible in reality.

This simplification would mean you would have to resubmit the cart & promocode everytime the cart changes (add/remove item, change shipping option). Is there any way to avoid that? (i.e. do we do it currently?)

Either you make that API call extremely fast, or you deal with promos client side (which opens up syncing issues). Promo does need to be re-written in any case.


###Payment methods

I've made a mistake around the language here.

- Payment Method is a model that actually represents a credit card.
- Payment Options is a component that shows you card/paypal/googlewallet/giftcard

Argh can't think about it now. Need to draw out the relationship between credit cards and payment methods. and then paypal and payment methods.
