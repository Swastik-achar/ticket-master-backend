const User = require("../models/User");

module.exports.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then(user => {
      const { _id, username, email } = user;
      res.json({ _id, username, email });
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.login=(req, res)=>{
    const body= req.body
    let user
    User.findByCredentials(body.email, body.password)
    .then(userFound=>{
        return userFound
        return user.generateToken()
    })
    .then(token=>{
        user={_id:user._id,email:user.email, username:user.username }
        res.json({
            token,
            user
        })
    })
    .catch(err=>{
        res.json(err)
    })
}