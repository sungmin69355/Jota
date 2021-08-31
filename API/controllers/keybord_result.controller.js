const result = {
    post_result : async (req, res, next) =>{
        res.json(req.body);
    }
}
module.exports = result;