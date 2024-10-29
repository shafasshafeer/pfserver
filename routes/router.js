const  express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const router = new express.Router()



// register post request to http://localhost:3000/
router.post('/register', userController.registerController)
// login post request to http://localhost:3000/
router.post('/login', userController.loginController)
// add project : post request tp http://localhost:3000/add-project
router.post('/add-project',jwtMiddleware,multerMiddleware.single("projectImg"),projectController.addProjectController)
// homeProjects to http://localhost:3000/home-projects
router.get('/home-projects',projectController.getHomeProjectController)
// all projects : get request to http:http://localhost:3000/all-projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectController)

// userprojects : get request to http:http://localhost:3000/user-projects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectController)
// remove project : delete request to http:http://localhost:3000/pid/remove-project
router.delete('/:pid/remove-project',jwtMiddleware,projectController.removeProjectController)

// edit project : delete request to http:http://localhost:3000/pid/edit-project
router.put('/:pid/edit-project',jwtMiddleware,multerMiddleware.single("projectImg"),projectController.editProjectController)

// edit user :  put request to http:http://localhost:3000/pid/edit
router.put("/user/edit",jwtMiddleware,multerMiddleware.single('profilePic'),userController.editProfileController)

// export router
module.exports=router