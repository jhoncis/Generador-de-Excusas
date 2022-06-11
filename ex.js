var who = ['the dog','my granma','his turtle','my bird'];
var what = ['eat','pissed','crushed','broked'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function aleatoriooo(){
    
    var a = who[Math.floor(Math.random() * who.length)];
    var b = what[Math.floor(Math.random() * what.length)];
    var c = when[Math.floor(Math.random() * when.length)];
    var d = a +" "+ b +" "+ c

    return d
}

console.log(aleatoriooo())
