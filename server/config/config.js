// ####################################
//                 PORT
// ####################################
process.env.PORT = process.env.PORT || 3000;

// ####################################
//                 Entorno
// ####################################
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ####################################
//                 Data Base
// ####################################
let urlDB;
if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafeteria';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


