function receivesAFunction(callback){
   callback()
    console.log("called")

}

function returnsANamedFunction (){
   function nameFunction(){
    return console.log("named fucntion")
   }
   return nameFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("this is anonymous function")
    }

}
