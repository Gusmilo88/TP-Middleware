module.exports = {
    detail : (req, res) => {
        return res.render("productDetail", {
            id : +req.params.id
        })
    },

    list : (req, res) => {
        return res.render("products")
    },
}