webpackJsonp([0],{

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_payment__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_payment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_payment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ChargeProvider__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, formBuilder, charge, stripe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.charge = charge;
        this.stripe = stripe;
        this.publishableKey = 'pk_test_2411c55a75ad6d004eaaf240f99b577dec6d6630789c06a23639967ae3c10572';
        this.form = this.formBuilder.group({
            'number': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'name': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'expiry': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'amount': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'cvc': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    HomePage.prototype.createCardToken = function (cardForm) {
        var _this = this;
        this.stripe.setPublishableKey(this.publishableKey);
        var expiry = __WEBPACK_IMPORTED_MODULE_4_payment___default.a.fns.cardExpiryVal(cardForm.expiry);
        var card = {
            number: cardForm.number,
            expMonth: expiry.month,
            expYear: expiry.year,
            cvc: cardForm.cvc
        };
        this.stripe.createCardToken(card)
            .then(function (token) {
            _this.charge.Charge(token, cardForm.amount)
                .subscribe(function (data) {
                _this.message(data, 'success');
            }, function (error) {
                console.log(error);
                _this.message(error, 'error');
            });
        }).catch(function (error) {
            _this.message(error, 'error');
        });
    };
    HomePage.prototype.message = function (response, messageType) {
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            type: messageType,
            width: 250,
            title: this.messageText(messageType),
            showConfirmButton: true,
            confirmButtonColor: '#3085d6'
        });
    };
    HomePage.prototype.messageText = function (type) {
        if (type == 'success') {
            return 'Payment successful!';
        }
        else {
            return 'Payment unsuccessful!';
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/imgs/bongloy_logo.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div padding-bottom class="card-container"></div>\n  <form card container=".card-container"\n  #cardForm="ngForm"\n  (ngSubmit)="createCardToken(cardForm)"\n  [formGroup]="form"\n  [messages]="messages"\n  [placeholders]="placeholders"\n  [masks]="masks"\n  formatting="false"\n  debug="true">\n      <div class="form-group">\n        <input type="tel" class="form-control" placeholder="Card number" formControlName="number"\n        [(ngModel)]="cardForm.number" name="number" card-number/>\n      </div>\n      <div class="form-group">\n        <input class="form-control" autocomplete="off" type="text" formControlName="name"\n        placeholder="Name on card" [(ngModel)]="cardForm.name" name="name" card-name/>\n      </div>\n      <div class="form-group">\n        <input width-68 class="form-inline" type="tel" formControlName="expiry"\n        placeholder="Expiry" [(ngModel)]="cardForm.expiry" name="expiry" card-expiry/>\n        <input width-30 class="form-inline" type="tel" formControlName="cvc"\n        placeholder="CVC" [(ngModel)]="cardForm.cvc" name="cvc" card-cvc>\n      </div>\n      <div class="form-group">\n        <input width-68 class="form-inline" autocomplete="off" type="tel" formControlName="amount"\n        placeholder="Amount" [(ngModel)]="cardForm.amount" name="amount" card-amount/>\n        <input width-30 class="form-inline" disabled type="text" value="USD">\n      </div>\n    <button [disabled]="!form.valid" type="submit" ion-button outline color="secondary" block>Buy</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ChargeProvider__["a" /* ChargeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChargeProvider = (function () {
    function ChargeProvider(http) {
        this.http = http;
        this.BACKEND_BASE_URL = 'https://bongloy-demo-laravel.herokuapp.com/';
    }
    ChargeProvider.prototype.Charge = function (token, amount) {
        var params = {
            token: token,
            amount: amount,
            currency: 'USD'
        };
        return this.http.post(this.BACKEND_BASE_URL + "charge", params)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ChargeProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ChargeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChargeProvider);
    return ChargeProvider;
}());

//# sourceMappingURL=ChargeProvider.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_stripe_native_stripe_native__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_card_ngx_card__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_stripe__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ChargeProvider__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_stripe_native_stripe_native__["a" /* StripeNativePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_card_ngx_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_stripe_native_stripe_native__["a" /* StripeNativePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_ChargeProvider__["a" /* ChargeProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeNativePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StripeNativePage = (function () {
    function StripeNativePage(navCtrl, navParams, stripe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = stripe;
    }
    StripeNativePage.prototype.ionViewDidLoad = function () {
        this.stripe.setPublishableKey('pk_test_ad251ef6dcf08a4ee27af892d1210f4a3108984e7e20f57220fba03d7adbff78');
    };
    StripeNativePage.prototype.splitExpiry = function () {
    };
    StripeNativePage.prototype.validateCard = function () {
        var card = {
            number: this.cardNumber,
            expMonth: this.cardMonth,
            expYear: this.cardYear,
            cvc: this.cardCVV
        };
        // Run card validation here and then attempt to tokenise
        this.stripe.createCardToken(card)
            .then(function (token) {
            alert(token.id);
        })
            .catch(function (error) { return console.error(error); });
    };
    StripeNativePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stripe-native',template:/*ion-inline-start:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/pages/stripe-native/stripe-native.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Native</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Card Number</ion-label>\n    <ion-input type="text" placeholder="Enter your 16 digit card number" \n    [(ngModel)]="cardNumber"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Expiration Month</ion-label>\n    <ion-input type="number" placeholder="Enter your card expiration month"\n    [(ngModel)]="cardMonth"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Expiration Year</ion-label>\n    <ion-input type="number" placeholder="Enter your card expiration year"\n    [(ngModel)]="cardYear"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>CVV</ion-label>\n    <ion-input type="number" placeholder="Enter your CVV"\n    [(ngModel)]="cardCVV"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n\n  <button ion-button block large (click)="validateCard()">Add Card</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/khomsovon/Documents/app/bongloy-demo-ionic/src/pages/stripe-native/stripe-native.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */]])
    ], StripeNativePage);
    return StripeNativePage;
}());

//# sourceMappingURL=stripe-native.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map