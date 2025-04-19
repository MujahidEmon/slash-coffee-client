
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { deleteFromCart, getCartCoffees, saveToCart } from "../Utils/LocalStroage";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [cartCoffees, setCartCoffees] = useState([]);
    const [Coffees, setCoffees] = useState([])
    const [orders, setOrders] = useState([])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signUp with email and password with name and photourl
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    // signIn with google
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }

    // signIn with gitHub
    const gitHubLogin = () => {
        return signInWithPopup(gitHubProvider)
    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }


    
// load the cart products from localstorage
  useEffect(() => {
    const products = getCartCoffees();
    setCartCoffees(products);
  }, []);
  useEffect(() => {
        fetch(`http://localhost:5000/coffees`)
        .then(res => res.json())
        .then(data => {
            setCoffees(data)
        })
  }, []);
  useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
  }, []);


// function for add to cart and stored in local storage
  const handleAddToCart = (product) => {
    saveToCart(product);
    const products = getCartCoffees();
    setCartCoffees(products);
  };


// remove cart products and also from local storage

  const handleRemoveFromCart = (_id) => {
    deleteFromCart(_id);
    const products = getCartCoffees();
    setCartCoffees(products);
  };


// function to find the total bill from the cart products
const totalPrice = cartCoffees.reduce((sum, item) => sum + Number(item.price), 0);
//   console.log("total: ",totalPrice);
  const grandTotal = totalPrice + 50;

    const authInfo = {
        user,
        login, 
        signUp,
        googleLogin,
        gitHubLogin,
        logOut,
        loading,
        handleAddToCart,
        handleRemoveFromCart,
        totalPrice,
        grandTotal,
        cartCoffees,
        Coffees,
        orders, setOrders,
        setCoffees
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoading(false)
        })

        return () => unSubscribe();
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;