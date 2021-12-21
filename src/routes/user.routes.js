const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  signUp,
  renderSigninForm,
  signin,
  logout,
} = require("../controllers/user.controller");

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signUp);

router.get('/users/signin', renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;