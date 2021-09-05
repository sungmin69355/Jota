const keybord = {
    get_keybord : async (req, res, next) =>{
        res.status(200).render("keybord_page.ejs");
    }
}
module.exports = keybord;