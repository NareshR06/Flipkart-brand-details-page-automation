const {setWorldConstructor} = require('@cucumber/cucumber');

class CustomConfig{
    constructor(){
        this.browser=null;
        this.context=null;
        this.page=null;
    }
}
setWorldConstructor(CustomConfig);