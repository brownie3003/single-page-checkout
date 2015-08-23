#Thoughts

Thoughts about assumptions I've made in the prototype and building it.

###Ember
As I've been building this, I've learnt a lot about async programming. I've tried to 
follow a Data Down Actions Up (DDAU) approach through out. For example the 'delivery-method' component will sit in a tree like this:

> order route -> shipping-options route -> delivery-methods component -> delivery-method component

Data will flow from top to bottom. I.e. order route will load an order with a shippingCountry. This will be passed through order route all the way down to delivery-methods component, where the shippingCountry drop down will display it. If the user changes the shippingCountry on the delivery-methods component drop down, an action is sent up the tree to the order route which changes the shippingCountry on the order.

At the same time we have services for related data that is not order data. We are on the order route, dealing with an order, but we also need related data, such as shipping options. Shipping options do not belong to an order, but we need to display a set of these (which are determined by the order.items and order.shippingCountry) so that the user can select one which we can apply it to the order. 

As an aside from services, this process is another good example of DDAU. The selected delivery method on the order (should be shipping option) is passed down from order route all the way down the tree to the delivery-method component. Each delivery method component will compare it's passed in delivery method with the selected delivery method, if they are the same it will have an active class (so we can idicate on the UI that it is currently selected). When the user clicks on a delivery method it will trigger an Action that is sent up the tree (with that delivery method) to the order route where it will change the data, causing the tree to re-render with new data.

Back to services, how does the delivery method data get into the tree as it's should not be dealt with by the order route. 

> order route -> shipping-options route -> delivery-methods component -> delivery-method component

We inject delivery method data horizontally with a service at the delivery methods component level (probably we should do this at the shipping-options route when I also have collection methods in the app). The delivery-methods component will have a computed property which observes the shipping country and the order.items. If either of these properties change the component will make a new request to the shipping service to give it a set of shipping options based on the new shipping country or with an updated set of cart items. The delivery methods are passed down into each delivery method component (DDAU).

####The promise problem
Ideally we would like to sync the app with the server at key points. I.e. when a user signs in or signs up. At that point we can concretely associate the order to a user. The problem with DDAU in Ember, is that currently send actions up is done via the 'send' or 'sendAction' methods. These are not promises, they simply return true or false (to indicate whether the action needs to be sent up the tree).

So when we create a new user account, what happens? Our tree is like this.

> order route -> account route -> sign-up route -> sign-up-form component

There is no data passed down through the tree. When the user submits the form an action is passed up the tree ("createUser"). At the account route, which has access to the user service the action is split. First the user service will create the user, and we can make this a promise which would look something like this:

    userService.create(user).then(function(user) {...some code for success..}, function(error) {...some code for failure...});

The first part, userService.create(user) will call off to our API with the user object and request we create a user and it will eventually return a new user object (or just a user id). There would also be a way to indicate that the promise is still resolving through the UI. All good. 

The problem comes when the promise has been resolved, we've now created a user through the service on our back end and have the user object or ID that we want to associate to the order, so inside our then success callback we will send on the returned user to the order route to set a user on the order.

    this.send('setUser', user);

The problem is that we cannot chain a .then() onto this action as it's not a promise. However the setUser method on order route requires communicating with the back end via the API, this could take time, this could fail, we don't know whats going to happen, but it's not a promise, so we can't wait.

There is a thread discussing it here, with a possible solution: http://discuss.emberjs.com/t/sendaction-as-a-promise/3143

In this example we would want to wait until the setting of user has resolved successfully before transitioning the app onto the next page. Of course what I left out was that actually right at the base of the tree in the sign-up-form component we have a sendAction that also needs to be a promise so we can have a pending/resolving state on the UI to indicate to the user that we are doing stuff (creating a user and then associating that created user to the order).

For the prototype, none of that really matters as 'syncing' is milliseconds with the front end data store.

###Shipping Options
I wanted to just call these delivery methods so started by calling them delivery methods
in code, then caved and called them shipping options in the HTML. It's now a bit of a
mess. Actually it should be shipping options with delivery and collection methods (as it's already modelled in prod code). I will clean this up when I implement collection methods.

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
