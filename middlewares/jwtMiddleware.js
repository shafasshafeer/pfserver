const jwt = require('jsonwebtoken')

// middleware
const jwtMiddleware=(req,res,next)=>{
    console.log("Inside jwtMiddleware");
    // get token from req header "authorization key"
    const token=req.headers["authorization"].split(" ")[1]
    console.log(token);
    // step to verify token
if (token) { try {
    const jwtResponse= jwt.verify(token,process.env.JWT_PASSWORD)
    console.log(jwtResponse);
    req.userId=jwtResponse.userId
     next()
  } catch (err) {
    res.status(401).json("please login to proceed the steps!!!")
  }
    
} else {
    resstatus(406).json("Authentication failed.... Token missing!!!")
}

 
    }

module.exports=jwtMiddleware