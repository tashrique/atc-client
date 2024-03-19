const getCart = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}


const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addItem = (item) => {
    const cart = getCart()

    if (cart.length > 0) {
        const exists = cart.find(i => i.id === item.id) //Only one time enroll
        if (!exists) {
            cart.push(item)
            setCart(cart)
        }
    } else {
        cart.push(item)
        setCart(cart)
    }
}


const removeItem = (id) => {
    const cart = getCart()
    const newCart = cart.filter(i => i.id !== id)
    setCart(newCart)
}

const clearCart = () => {
    localStorage.removeItem('cart')
}

export default {
    getCart,
    setCart,
    addItem,
    removeItem,
    clearCart
}