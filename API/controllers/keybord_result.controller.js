const KeybordModel = require('../models/keybord.model');

const result = {
    post_result : async (req, res, next) =>{
        let body = req.body;
        console.log(body);
        const keybordRecord = await KeybordModel.keybord_model(body);
        //DB에서 reject을 줬을경우 예외처리를 해줘야함.
        
        console.log("keybordRecord : ", keybordRecord);
        return res.render("result.ejs", {
            data : keybordRecord
        });
    }
}
module.exports = result;