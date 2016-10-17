var names = ["Andrew", 'Julie', 'Jen'];

// names.forEach(function (name){
//     console.log('forEach', name);
// });

// names.forEach((name) =>{
//     console.log('arrowFunc', name); 
//     console.log('something else ');
// } );

// name.forEach((name) => console.log(name));

var returnMe = (name) => name + '!'; 

console.log(returnMe('Ethan'));

var person = {
    name: 'Andrew',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + " says high to " + name);
        })
    }
}

persons.greet();