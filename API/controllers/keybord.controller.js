const keybord = {
    get_keybord : async (req, res, next) =>{
        res.render("keybord_page.ejs");
    }
}
module.exports = keybord;