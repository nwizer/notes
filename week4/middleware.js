const express = require ("express");
const app = express();

function userMiddleware(req,res,next){
    if (username="mani"&&password!="pass"){
        res.status(403).json({
            msg:"Incomplete inputs",
        });
    }else{
        next();
    }
}

function kidneyMiddleware(req,res,next){
    if(kidneyId!=1&&kidneyId!=2){
        res.status(483).json({
            msg:"Incorrect inputs",
        });
    }else{
        next();
    }
};

app.get("/health-startup", userMiddleware,kidneyMiddleware, function(req,res){
    res.send("");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});