const Joi = require('joi');

const keyboard_validation ={
    keyboard_validation : async (req, res, next) =>{
        const body = req.body;

        const schema = Joi.object().keys({
            identity: Joi.string().min(1).max(20).required(),
            purpose: Joi.string().min(1).max(20).required(),
            blow: Joi.string().min(1).max(20).required(),
            sound: Joi.string().min(1).max(20).required(),
            design: Joi.string().min(1).max(20).required(),
            price: Joi.string().min(1).max(20).required(),
        });
        try {
            // 검사시작
            await schema.validateAsync(body);   
        } catch (e) {
            // 유효성 검사 에러
            return res.status(400).json({ code: 400, message: e.message })
        }
        next();
    }
};
module.exports = keyboard_validation;