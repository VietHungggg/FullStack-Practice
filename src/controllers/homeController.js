let getHomePage = (req,res) => {
    return res.render("homepage.ejs");
}

let getInformation = (req,res) => {
    return res.render("information.ejs");
}

module.exports = {
    getHomePage:getHomePage,
    getInformation:getInformation,
}