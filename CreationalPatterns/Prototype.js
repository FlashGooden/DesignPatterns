// we use the protype pattern to return an object that has initialized values that will be attached to it. This pattern is also known as the "properties pattern". Javascript is a prototypal language, the way how objects in javascript are created uses the prototype pattern. Use this when you are creating objects that need blueprints to print alongside it. 

class CustomerPrototype {
   constructor(proto) {
      this.proto = proto;
   }

   clone = () => {
      const customer = new Customer();
      // console.log(this.proto.first)
      customer.first = this.proto.first;
      customer.last = this.proto.last;
      customer.status = this.proto.status;
      // console.log(customer)
      return customer
   };
}

class Customer {
   constructor(first, last, status) {
      this.first = first;
      this.last = last;
      this.status = status;
   }

   say = () => {
      return console.log(
         `first name: ${this.first} \n last name: ${this.last} \n status: ${this.status}`
      );
   };
}


const run = () => {
  const proto = new Customer("Trey", "Gooden", "Golden");
  const initialize = new CustomerPrototype(proto);
  initialize.clone();
  console.log(initialize, 'init')
  initialize.proto.say()
  // proto.say()
};

run()