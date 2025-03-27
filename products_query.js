db.products.find({
    tags : {
        $in: ["non", "lorem"]
    }
})