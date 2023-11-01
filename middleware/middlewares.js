const middleware = (req,res,next)=>{
    console.log('middleware is executed');
next();
}
module.exports = middleware;
