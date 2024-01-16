import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export type RestaurantType = {
    id: number
    name: string
    slug: string
    phone: number
    email: string
    address: string
    cuisine: string
    image: string
    openAt: number
    closeAt: number
    description: string
}

const CardOfRestaurant = (restaurant: RestaurantType) => {
    return (
        <>
            <div className="text-2xl text-sky-700">{restaurant.name}</div>

            <p className="text-lg">{restaurant.address}</p>
            <p className="text-lg">{restaurant.email}</p>
            <p className="">{restaurant.description}</p>
        </>
    )
}

export default CardOfRestaurant
