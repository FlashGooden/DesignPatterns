//we use this pattern to have a way to cycle between multiple strategies / algorithms. Lets say we wanted to have to choose between a delivery company, and see which one has the best rates. We would have our delivery companies defined, and with the delivery companies they have algorithms which will get the price / cost of shipping. Depending on the selection of the carrier, it will allow us to quickly hotswap the carrier and prices @ runtime without the user knowing.

(function () {
   var log = "mooo";
  console.log(log, 'this is the log')
   return {
      add: function (msg) {
         log += msg + "\n";
      },
      show: function () {
         console.log(log);
         log = "";
      },
   };
})();

class Shipping {
   constructor() {
      this.company = "";
   }

  
      setStrategy = function (company) {
        this.company = company;
     }

  
     calculate = function (shipment) {
        return this.company.calculate(shipment);
     }
    
   
}

Shipping.protoype = {
   setStrategy: function (company) {
      this.company = company;
   },

   calculate: function (shipment) {
      return this.company.calculate(shipment);
   },
};

class UPS {
   constructor() {
      this.calculate = function (shipment) {
         //calculations would go here
         return "$45.00";
      };
   }
}

class USPS {
   constructor() {
      this.calculate = function (shipment) {
         //calculations would go here
         return "$35.00";
      };
   }
}
class Fedex {
   constructor() {
      this.calculate = function (shipment) {
         //calculations would go here
         return "$40.00";
      };
   }
}

console.log(log)
function run () {
  const shipment = {from: '11413', to: '11203', weight: 'lbs'}
  const ups = new UPS
  const fedex = new Fedex
  const usps = new USPS

  shipping = new Shipping


  // console.log(shipping)
  shipping.setStrategy(ups)
  log.add(`UPS Strategy: ${shipping.calculate(shipment)}`)
  shipping.setStrategy(usps)
  log.add(`USPS Strategy: ${shipping.calculate(shipment)}`)
  shipping.setStrategy(fedex)
  log.add(`FedEx Strategy: ${shipping.calculate(shipment)}`)
}

run()