const {redis_client} = require('../modules/redis');
//Middleware Function to Check Cache
exports.check_leader_list = (req, res, next) => {
       //get key 'leaders' 
       redis_client.get('leaders', (err, data) => {
           if (err) {
               console.log(err);
               res.status(500).send(err);
           }
           //if no match found
           if (data != null) {
	       console.log('key [leaders] exists');
	       let resultJSON = JSON.parse(data);
               res.json(resultJSON);
           } 
           else {
               //proceed to next middleware function
               next();
           }
        });
};


//Middleware Function to Check Cache
exports.check_leader_detail = (req, res, next) => {
       //get key 'leader:id' 
       redis_client.get('leader/' + req.params.id, (err, data) => {
           if (err) {
               console.log(err);
               res.status(500).send(err);
           }
           //if no match found
           if (data != null) {
	       console.log('key [leader/' + req.params.id,'] exists');
	       let resultJSON = JSON.parse(data);
               res.json(resultJSON);
           } 
           else {
               //proceed to next middleware function
               next();
           }
        });
};
