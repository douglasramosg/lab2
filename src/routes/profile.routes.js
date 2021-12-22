const { Router } = require("express");
const router = Router();
const {renderProfile} = require('../controllers/profile.controller' )
const { isAuthenticated } = require('../helpers/auth');

router.get("/", renderProfile); 
router.post("/", renderProfile);



module.exports = router;
