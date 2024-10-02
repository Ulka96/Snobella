import React from 'react'
import { useSelector } from 'react-redux'

const FavPage = () => {

    const customFav = useSelector((state) => state.cart.customFav)

    console.log(customFav, "customFav")
  return (
    <div>FavPage</div>
  )
}

export default FavPage