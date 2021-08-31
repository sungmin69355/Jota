const result = {
    post_result : async (req, res, next) =>{
        console.log(req.body);
        res.json(req.body);
    }
}
module.exports = result;