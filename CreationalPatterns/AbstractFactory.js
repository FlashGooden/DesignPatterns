// a Factory is an object that creates other objects
const log = (function () {
   let log = "";

   return {
      add: function (msg) {
         log += msg + "\n";
      },
      show: function () {
         console.log(log);
         log = ''
      },
   };
})();
//test
class Employee {
   constructor(name) {
      this.name = name;
   }

   say = () => {
      log.add("I am employee " + this.name);
   };
}

class EmployeeFactory {
   create = (name) => {
      return new Employee(name);
   };
}

class Vendor {
   constructor(name) {
      this.name = name;

      this.say = function () {
         log.add("I am vendor " + name);
      };
   }
}

class VendorFactory {
   create = (name) => {
      return new Vendor(name);
   };
}

const runLog = () => {
   const persons = [];
   const employeeFactory = new EmployeeFactory()
   const vendorFactory = new VendorFactory()

   persons.push(employeeFactory.create('Johnathan Gregg'))
   persons.push(employeeFactory.create('Marcus Aurelius'))
   persons.push(vendorFactory.create('Nike'))
   persons.push(vendorFactory.create('Adidas'))

   persons.map((name)=> {
    name.say()
   })

   log.show()
};

runLog()
