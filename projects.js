db.orders.aggregate([
    {
        $project: {
            totalAmount: "$total_price",
            status: 1
        }
    }
])