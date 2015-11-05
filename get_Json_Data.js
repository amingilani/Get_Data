var request = require("request");
module.exports.orderBooks ={
    post: function (req, res) {
        var url = "https://api.blinktrade.com/api/v1/PKR/orderbook"
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                res.send(body);
            }
        })
    }
}
module.exports.ticker ={
    post: function(req,res){
      var url = "https://api.blinktrade.com/api/v1/PKR/ticker"
      request({
        url: url,
        json: true
      }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        res.send(body);
       }
    })
  }
}
module.exports.trades= {
    post : function(req,res){
       var url = "https://api.blinktrade.com/api/v1/PKR/trades"
       request({
            url: url,
            json: true
         }, function (error, response, body) {

          if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
            res.send(body);
           }
      })
   }
}