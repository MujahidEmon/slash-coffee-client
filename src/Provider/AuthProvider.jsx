import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { deleteFromCart, getCartCoffees, saveToCart } from "../Utils/LocalStroage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cartCoffees, setCartCoffees] = useState([]);
  const [Coffees, setCoffees] = useState([]);
  const [orders, setOrders] = useState([]);

  // 🔐 Auth Functions
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🛒 Local Cart
  useEffect(() => {
    const products = getCartCoffees();
    setCartCoffees(products);
  }, []);

  const handleAddToCart = (product) => {
    saveToCart(product);
    setCartCoffees(getCartCoffees());
  };

  const handleRemoveFromCart = (_id) => {
    deleteFromCart(_id);
    setCartCoffees(getCartCoffees());
  };

  const totalPrice = cartCoffees.reduce((sum, item) => sum + Number(item.price), 0);
  const grandTotal = totalPrice + 50;

  // ☕ Load coffees
  useEffect(() => {
    fetch("https://slash-expresso-emporium-server.onrender.com/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  // 📦 Load orders
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // ✅ Track Auth Status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 💬 Send complain message
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newComplain = {
      phone: form.get("phone"),
      email: form.get("email"),
      service: form.get("service"),
      message: form.get("message"),
    };

    fetch("https://slash-expresso-emporium-server.onrender.com/complains", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newComplain),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const authInfo = {
    user,
    login,
    signUp,
    googleLogin,
    gitHubLogin,
    logOut,
    loading,
    setLoading,
    handleAddToCart,
    handleRemoveFromCart,
    totalPrice,
    grandTotal,
    cartCoffees,
    Coffees,
    orders,
    setOrders,
    setCoffees,
    handleSendMessage,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
