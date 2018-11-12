import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import Payment from 'payment';
import Swal from 'sweetalert2';
import { ChargeProvider } from '../../providers/ChargeProvider';

@Component({
  selector: 'page-charge',
  templateUrl: 'charge.html'
})
export class ChargePage {

  form: FormGroup;
  private publishableKey = 'pk_test_2411c55a75ad6d004eaaf240f99b577dec6d6630789c06a23639967ae3c10572';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private charge:ChargeProvider,
    public stripe: Stripe
  ) {
    this.form = this.formBuilder.group({
      'number': ['', Validators.required],
      'name': ['', Validators.required],
      'expiry': ['', Validators.required],
      'amount': ['', Validators.required],
      'cvc': ['', Validators.required]
    });
  }

  createCardToken(cardForm){
     this.stripe.setPublishableKey(this.publishableKey);
     let expiry = Payment.fns.cardExpiryVal(cardForm.expiry);
     let card = {
       number: cardForm.number,
       expMonth: expiry.month,
       expYear: expiry.year,
       cvc: cardForm.cvc
     };
     this.stripe.createCardToken(card)
      .then(token => {
        this.charge.Charge(token.id, cardForm.amount)
          .subscribe(data => {
            this.message(data, 'success');
          });
      }).catch(error => {
        this.message(error, 'error');
      });
  }

  message(response, messageType){
    Swal({
      type: messageType,
      width: 250,
      title: this.messageText(messageType),
      showConfirmButton: true,
      confirmButtonColor: '#3085d6'
    });
  }

  messageText(type){
    if(type == 'success'){
      return 'Payment successful!';
    }else{
      return 'Payment unsuccessful!';
    }
  }
}
