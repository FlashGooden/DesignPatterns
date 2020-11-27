//We use a singleton class when we want to make a instance of something where only one type of it will exist. 

const Singleton = function () {
  let instance;

  createInstance = () => {
    const object = {string: 'I am in the instance'}
    const object2 = new Object('testing how this looks as an instance')

    return object2
  }

  return {
    getInstance: function () {
      if(!instance) {
        instance = createInstance()
      }

      return instance
    }
  }
}()

function run() {
  const instance1 = Singleton.getInstance()
  const instance2 = Singleton.getInstance()

  if(instance1 == instance2){
    console.log(instance2)
    console.log('these two instances are the same')
  }
}

run()
