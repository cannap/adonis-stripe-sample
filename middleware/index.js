class StripeMiddleware {
  constructor () {}
  handle ({ request }, next) {
    request.request.setEncoding('utf8')

    var data = ''

    request.on('data', function (chunk) {
      console.log(chunk)
      data += chunk
    })

    request.request.on('end', function () {
      request.request.rawBody = data
      next()
    })
  }
}

module.exports = StripeMiddleware
