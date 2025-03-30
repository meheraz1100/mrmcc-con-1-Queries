db.orders.aggregate([
    {
        $match: {
            $or: [
                { status: "Shipped" },
                { total_price: 5000 }
            ]
        }
    }
])