const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const databaseobj = require("../common/dbConnection");

module.exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // taking data from parsed body
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    //Email validation
    if (!email || !email.match(emailregx))
      return res
        .status(400)
        .json({ message: "Please provide a valid emailId" });
    //password validation
    if (!password || password.length < 8)
      return res
        .status(400)
        .json({ message: "Password should be of length 8" });
    // checking unique email id is provided
    let checkEmail = await databaseobj.knexpool("users").select("id").where({
      email: email,
    });
    if (checkEmail && checkEmail.length > 0)
      return res
        .status(400)
        .json({ message: "EmailId is already registered." });
    //all validation done, now creating the user
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    await databaseobj.knexpool("users").insert([
      {
        email: req.body.email,
        password: hashedPassword,
        username: username,
      },
    ]);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Sorry unable to create user at the moment!" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let userExist = await dbObj.knexpool("users").where("email", email);
    //If email is not in db
    if (userExist.length == 0)
      return res.status(400).json({ message: "Email is not registered!" });
    let valid = await verifyPassword(password, userExist[0].password);
    //If password wrong
    if (!valid) return res.status(400).json({ message: "Wrong Password!" });
    // all validation done, sending token
    return res.status(200).json({ token: await generateJwt(userExist[0]) });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Unable to login at the moment!" });
  }
};

function generateJwt(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
}
async function verifyPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
