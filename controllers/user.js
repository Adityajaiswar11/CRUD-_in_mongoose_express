const User = require("../model/userModel");

//create users
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const { email } = user;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const savedData = await user.save();
    return res.status(200).json({ message: "created", statusCode: "Ok", savedData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Internal Server Error", status: false });
  }
};

//fetch all users
const Allusers = async (req, res) => {
  try {
    const data = await User.find();
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error", status: false });
  }
};

//update user by given Id
const updataUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userExist = await User.findOne({ _id: userId });
    if (!userExist) {
      return res.status(404).json({ message: "User is not found" });
    }
    const userUpdate = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    return res.status(201).json({ message: "User Updated!", userUpdate });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error", status: false });
  }
};

//delete user by id
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ messsage: "User Not Found" });
    }
    await User.findByIdAndDelete(id);
    return res.status(200) .json({ message: "User deleted successfully"});
  } catch (err) {
    return res.status(500) .json({ error: "Internal Server Error", status: false });
  }
};
module.exports = { createUser, Allusers, updataUser, deleteUser };
