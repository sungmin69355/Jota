const keyboard_model = require('../models/keyboard.model');

const result = {
    post_result : async (req, res, next) =>{
        try{
            let body = req.body;
            console.log(body);
            const KeyboardModel = await keyboard_model.keyboard_model(body);
            //DB에서 reject을 줬을경우 예외처리를 해줘야함.
            if(KeyboardModel == undefined){
                KeyboardModel = [];
            }
            console.log("KeyboardModel : ", KeyboardModel);
            return res.status(200).render("result.ejs", {
                data : KeyboardModel
            });
        }catch(err){
            return res.status(400).render("error.ejs", {err});
        }
    }
}
module.exports = result;