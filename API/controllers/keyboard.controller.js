const keyboard = {
    get_keyboard : async (req, res, next) =>{
        res.status(200).render("keyboard_page.ejs");
    }
}
module.exports = keyboard;