const {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
  verifyRazorpay,
} = require("../controllers/user.controller");
const authUser = require("../middleware/auth");

const userRouter = require("express").Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", authUser, userCredits);
userRouter.post("/pay-razor", authUser, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

module.exports = userRouter;
