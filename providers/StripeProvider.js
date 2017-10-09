const { ServiceProvider } = require('@adonisjs/fold') // when i say "use" it works

class StripeProvider extends ServiceProvider {
  register () {
    this._stripeMiddleware()
    this.app.singleton('Adonis/Addons/Stripe', app => {
      const config = app.use('Adonis/Src/Config').get('paymill')
      const stripe = require('stripe')(config.stripe_sk)
      return stripe
    })
    this.app.alias('Adonis/Addons/Stripe', 'Stripe')
  } //

  _stripeMiddleware () {
    this.app.bind('Adonis/Middleware/Stripe', app => {
      const StripeMiddleware = require('../middleware')
      //
      return new StripeMiddleware()
    })
  }
}

module.exports = StripeProvider
