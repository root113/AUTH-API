const router = require(`express`).Router();
const User = require(`../model/User`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const { registerValidation, loginValidation } = require(`../validation`);

//*REGISTER
router.post(`/register`, async (req, res) => {
  //Validate the data before creation of user
  try {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if user already exist
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send(`A user with that email already exists!`);

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//*LOGIN
router.post(`/login`, async (req, res) => {
  //Validate data before login attempt
  try {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if email doesn't exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Invalid email or password!`);

    //Check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send(`Invalid email or password`);

    //Create & assign a token to the user for current session
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header(`auth-token`, token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
