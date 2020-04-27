const redis = require("redis");
//setup port constants
const port_redis = process.env.PORT || 6379;
//configure redis client on port 6379
const redis_client = redis.createClient(port_redis);
redis_client.auth('We5VN6vhXIVxGwV3NTRRFyl9EpvKLrgeBiD4/AUpuAWRDhFn0yb4Z+9R84hxSseMUrHRjRYmy/MWLFl5');
redis_client.on("connect", function() {
  console.log("You are now connected to redis");
});

module.exports = {
  redis_client: redis_client 
};
