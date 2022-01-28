class Calculatrice {
    //declaration
    #_a;
    #_b;
    #_result;
    #_operation;


    get a(){
        return this.#_a ;
    }
    set a(value){
        this.#_a=value 
    }
    get b(){
        return this.#_b
    }
    set b(value){
        this.#_b=value
    }
    get result(){
        return this.#_result
    }
    set result(value){
        this.#_result = value
    }

    get operation(){
        return this.#_operation
    }
    set operation(value){
        this.#_operation = value
    }


    calculate() {
        this.#_result = undefined
        switch(this.#_operation){
            case '+' : this.#_result = this.#_a + this.#_b
            break;
            case '-' : this.#_result = this.#_a - this.#_b
            break;
            default:
            break;

            

        }
        return this.#_result
    }


    init(){
        this.#_a=undefined
        this.#_b=undefined
        this.#_operation = undefined
        this.#_result =undefined
    }

}