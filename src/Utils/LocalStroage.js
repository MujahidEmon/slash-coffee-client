import toast from "react-hot-toast";

// functions to get item from localStorage
export const getCartCoffees = () => {
    let cartCoffees = [];
    const storedCartCoffees = localStorage.getItem('cartCoffees')
    if(storedCartCoffees){
        cartCoffees = JSON.parse(storedCartCoffees)
    }
    return cartCoffees;
} 


// functions to store item

export const saveToCart = (product) => {
    let cartCoffees = getCartCoffees();

    const isExist = cartCoffees.find(p => p._id ===product._id)

    if(isExist){
        return toast.error('already added to cart')
    }

    cartCoffees.push(product)

    localStorage.setItem('cartCoffees', JSON.stringify(cartCoffees))
    toast.success('added to cart')
}


export const deleteFromCart = (_id) => {
    let cartCoffees = getCartCoffees()

    const remaining = cartCoffees.filter(b => b._id !==_id)
    localStorage.setItem('cartCoffees', JSON.stringify(remaining))
    toast.success('Removed From Cart')


}


