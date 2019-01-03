<p align="center"><img src="https://cdn.bongloy.com/assets/logos/bongloy_logo-01f89eca1fc6ec70a7d1dfd1b0e9df6429e16eb283a3f01e4b07551009f2e2ee.png" width="200"></p>
Bongloy-demo-ionic is a ionic app which demonstrates how to use Bongloy.

### Screenshots
<img src="screens/Demo.gif" width="300">

## Installation

    $ git clone https://github.com/khomsovon/bongloy-demo-ionic.git

```sh
$ cd bongloy-demo-ionic
$ npm install
$ ionic serve
```

## Build

* Android
```sh
$ ionic cordova platform add android
$ cd platforms/android
```
build with Android Studio

* iOS
```sh
$ ionic cordova platform add ios
$ cd platforms/ios
```
If you haven't already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

  ```sh
  $ pod install
  ```
  If error "CocoaPods could not find compatible versions for pod 'Stripe': in Podfile" please update Podfile to:

  ```javascript
  platform :ios, '9.0'
    target 'Bongloy' do
    pod 'Stripe', '13.2.0'
  end
  ```
  Don't forget to use the .xcworkspace file to open your project in Xcode, instead of the .xcodeproj file, from here on out.
  ```sh
    open Bongloy.xcworkspace
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
