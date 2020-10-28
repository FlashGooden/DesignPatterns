//This pattern is for allowing a client to create complex objects by specifying type and content only. the details of the construction are still hidden

const log = (() => {
   let log = "";

   return {
      add: (msg) => (log += msg + "\n"),
      show: () => {
         console.log(log);
         log = "";
         return ' log reset'
      },
   };
})();

class Shop {
  construct = (builder) => {
    builder.step1()
    builder.step2()
    return builder.get()
  }

}

function Car() {
   let doors = 0;

   return {
      addParts: () => {

         return doors = 4;
      },
      say: () => {
         return log.add(`I am a ${doors}- door car`);
      },
   };
}

function Truck() {
   let doors = 0;

   return {
      addParts: () => {
         doors = 2;
      },
      say: () => {
         log.add(`I am a ${doors}- door vehicle`);
      },
   };
}

class CarBuilder {
   constructor() {
      this.car = null;
   }

   step1 = () => {
      this.car = Car();
      console.log(this.car, 'this.car')
   };

   step2 = () => {
      this.car.addParts();
   };

   get = () => {
      return this.car;
   };
}

class TruckBuilder {
   constructor() {
      this.truck = null;
   }

   step1 = () => {
      this.truck = new Truck();
   };

   step2 = () => {
      this.truck.addParts();
   };

   get = () => {
      return this.truck;
   };
}

function run() {
  let shop = new Shop
  let carBuilder = new CarBuilder
  let truckBuilder = new TruckBuilder
  let car = shop.construct(carBuilder)
  let truck = shop.construct(truckBuilder)

  car.say()
  truck.say()
  console.log(log.show())
}

run()
