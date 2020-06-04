function setMongoIdToUser(user, context, callback) {
  // The Mongo id should only be set to verified users.
  if (!user.email || !user.email_verified) {
    return callback(null, user, context);
  }

  if (!user.app_metadata) {
    user.app_metadata = {};
  }

  const path = require('path');
  const { APP_URL } = configuration;
  const MONGO_KEY = path.join(APP_URL, 'mongo_id');

  // If the mongo_id is already set we can also skip this
  if (user.app_metadata.mongo_id) {
    context.accessToken[MONGO_KEY] = user.app_metadata.mongo_id;
    return callback(null, user, context);
  }

  const bson = require('bson');
  user.app_metadata.mongo_id = new bson.ObjectId();

  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(function () {
      context.accessToken[MONGO_KEY] = user.app_metadata.mongo_id;
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });

}
