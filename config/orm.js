var connection = require('./connection.js');// not working w/o .

var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM burgers', function(err,result){
            if(err)throw err;
            cb(result)
        })
    },

    update: function(tableInput, condition, cb){
        connection.query('UPDATE burgers SET devoured = true', function(err, result){
            if(err)throw err;
            cb(result);
        })
    }//incorrect 
}

module.exports = orm;