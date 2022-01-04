// Métier
class CalculatriceBLO {
   
    // Private attributes
    #_a;
    #_b;
    #_result;
    #_typeOperation;

    // Setters and getters
    get a() {
      return this._a  
    }
    set a(value){
        this._a = value;
    }
    get b() {
        return this._b 
    }
    set b(value){
          this._b = value;
    }
    
    get result() {
        return this._result
    }
    set result(value){
          this._result = value;
    }

    get typeOperation() {
        return this._typeOperation
    }
    set typeOperation(value){
          this._typeOperation = value;
    }

    Calculer(){
        this._result = undefined;
        switch (this._typeOperation) {
            case '+':
                this._result = this._a + this._b;
                break;
            case '-':
                this. _result = this._a- this._b;
                    break;
            default:
                break;
        }
        return this._result;
    }

    Init(){
        this._a = undefined;
        this._b = undefined;
        this._typeOperation = undefined;
    }

}