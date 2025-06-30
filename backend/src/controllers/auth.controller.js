import { generateToken } from "../utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { sendSuccess, sendError } from "../utils/sendResponse.js";
import cloudinary from "../config/cloudinary.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return sendError(res, "All fields required.", 400);
    }

    if (password.length < 6) {
      return sendError(
        res,
        "Password must be at least 6 characters long.",
        400
      );
    }

    const user = await User.findOne({ email });
    if (user) return sendError(res, "Email already exists", 400);

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save new user, generate JWT token, and send response
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      sendSuccess(
        res,
        {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          profilePic: newUser.profilePic,
        },
        "User Registered Successfully",
        201
      );
    } else {
      sendError(res, "Invalid User Data", 400);
    }
  } catch (error) {
    console.log("Error in Signup Controller", error);
    sendError(res);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return sendError(res, "Invalid Credentials", 400);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return sendError(res, "Invalid Credentials", 400);
    }

    generateToken(user._id, res);
    sendSuccess(res, {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error);
    sendError(res);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    sendSuccess(res, "Logged Out Successfully.");
  } catch (error) {
    console.log("Error in logout controller", error);
    sendError(res);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      sendError(req, "Profile Picture is Required", 400);
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );
    sendSuccess(res, updatedUser, "Profile Picture Updated Successfully");
  } catch (error) {
    console.log("Error in update profile", error);
    sendError(res);
  }
};

export const checkAuth = (req, res) => {
  try {
    sendSuccess(res, req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error);
    sendError(res);
  }
};
