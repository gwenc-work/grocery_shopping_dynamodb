function checkRes(res, errMsg, successMsg){

    console.log("in check res function");

    //console.log("res: " + res);

    if (!res){
        // console.log("error");
        return errMsg;
    }else{
        // console.log("success");
        // console.log(successMsg);
        return successMsg;
    }
}


module.exports = {
    checkRes
}