db.orders.aggregate([
    {
        $match: {
            status: "Shipped",
            total_price: {$gt: 20000}
        }
    }
])