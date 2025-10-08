
const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='ibad'){
         req.user={name:"ibad",id:3};
         next()
    }
    else{
        console.log("im runing")
        res.status(404).send('UnAuthorize')}
}

module.exports = authorize;