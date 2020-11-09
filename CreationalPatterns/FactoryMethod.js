// The Factory Method design pattern looks to create an item, that can have multiple properties. Use this to do something like make a set of employees, but different employee type or having a colleciton of documents that create different types (pdf, xml, rtf )

class Factory {
  
   createEmployee = (emp) => {
      let employee;

      if (emp === "fulltime") {
         employee = this.fullTime();
      } else if (emp === "parttime") {
         employee = this.partTime();
      } else if (emp === "temporary") {
         employee = this.temporary();
      } else if (emp === "contractor") {
         employee = this.contractor();
      }

      employee.type = emp;

      employee.say = function () {
         runLog.add(this.type + ": rate " + this.hourly + "/hour");
      };

      return employee;
   };

   fullTime = () => {
      return { hourly: "$12" };
   };

   partTime = () => {
      return { hourly: "$11" };
   };

   temporary = () => {
      return { hourly: "$10" };
   };

   contractor = () => {
      return { hourly: "$37" };
   };
}

const runLog = (() => {
   let log = "";

   return {
      add: (msg) => {
         log += msg + "\n";
      },
      show: () => {
         console.log(log);
      },
   };
})();

(function () {
   const employees = [];
   const factory = new Factory();

   employees.push(factory.createEmployee("fulltime"));
   employees.push(factory.createEmployee("parttime"));
   employees.push(factory.createEmployee("temporary"));
   employees.push(factory.createEmployee("contractor"));

   for (let i = 0; i < employees.length; i++) {
      employees[i].say();
   }

   runLog.show();
})();
