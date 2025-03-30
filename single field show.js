db.orders.aggregate([
    {
        $group: {_id: "$user_id"},
    }
])