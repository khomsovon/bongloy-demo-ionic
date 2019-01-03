<p align="center"><img src="https://cdn.bongloy.com/assets/logos/bongloy_logo-01f89eca1fc6ec70a7d1dfd1b0e9df6429e16eb283a3f01e4b07551009f2e2ee.png" width="200"></p>
Bongloy-demo-ionic is a ionic app which demonstrates how to use Bongloy.

### Screenshots
<img src="Screen/Demo.gif" width="300">

## Installation

    $ git clone https://github.com/khomsovon/bongloy-demo-ionic.git

```sh
$ cd bongloy-demo-ios
$ npm install
$ ionic serve
```

## Build

```sh
$ ionic cordova platform add [<platform>]
$ ionic cordova platform build [<platform>]
```

## Intergration
1.  Install the Cordova and Ionic Native plugins:
```sh
$ cordova plugin add https://github.com/khomsovon/cordova-plugin-stripe.git
$ npm install --save @ionic-native/stripe
```
2. Usage

```javascript
import { Stripe } from '@ionic-native/stripe';

constructor(private stripe: Stripe) { }

...

this.stripe.setPublishableKey('bongloy_publishable_key');

let card = {
 number: '4242424242424242',
 expMonth: 12,
 expYear: 2020,
 cvc: '220'
};

this.stripe.createCardToken(card)
   .then(token => console.log(token.id))
   .catch(error => console.error(error));
```
