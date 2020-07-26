


// Puerto. config.

process.env.PORT = process.env.PORT || 3000;

//mongodb+srv://Manuel_G04:Sc2ppIyGCKcZwd3q@appdatabase.rsepc.mongodb.net/empleo


//mongodb://localhost:27017/empleo


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// Base de datos.

let urlDB;

if(process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/empleo';
} else {
    urlDB = 'mongodb+srv://Manuel_G04:Sc2ppIyGCKcZwd3q@appdatabase.rsepc.mongodb.net/appdatabase?retryWrites=true&w=majority';
}

process.env.urlDB = urlDB;