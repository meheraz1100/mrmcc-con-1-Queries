db.orders.aggregate([
    {
        $match: {
            status: "Shipped"
        }
    },
    {
        $facet: {
            totalSale: [
                {
                    $project: {
                        orderTotal: {
                            $sum: {
                                $map: {
                                    input: "$products",
                                    as: "product",
                                    in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                }
                            }
                        }
                    }
                },
                {
                    $group: { _id: null, totalSale: { $sum: "$orderTotal" } }
                },
                {
                    $project: { _id: 0, totalSale: 1 }
                }
            ],
            averageOrderTotal: [
                {
                    $project: {
                        orderTotal: {
                            $sum: {
                                $map: {
                                    input: "$products",
                                    as: "product",
                                    in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                }
                            }
                        }
                    }
                },
                {
                    $group: { _id: null, avgOrderTotal: {$avg: "$orderTotal"}}
                },
                {
                    $project: {_id: 0, avgOrderTotal: 1}
                }
            ]
        }
    }
])
