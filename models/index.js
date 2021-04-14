  
// import models
let Comment = require('./Comment');
let Post = require('./Post');
let User = require('./User');



Comment.belongsTo(User, {
  foreignKey: 'user_id',
});



Post.belongsTo(User, {
foreignKey: 'user_id'
});


Post.hasMany(Comment, {
foreignKey: 'post_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  
  // create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
  });


module.exports = {
  Comment,
  Post,
  User,
  
};