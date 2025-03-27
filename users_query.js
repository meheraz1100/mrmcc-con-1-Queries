db.users.updateOne({ email: "hurleybritt@telepark.com" }, {
    $inc: {age:1}
})