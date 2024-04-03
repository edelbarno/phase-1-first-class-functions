
function receivesAFunction(callback){
    console.log(spy)
}
    return receivesAFunction;
  
 
function returnsANamedFunction() {
 function namedFunction(){
    console.log('a named function')
 }
 return namedFunction;
    }


function returnsAnAnonymousFunction(){
    function anonymousFunction(){
console.log ('before all')
    }
    return namedFunction()
        
    };
