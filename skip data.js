db.orders.aggregate([
    {
        $skip: 3
    }
])