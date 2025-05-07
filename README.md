
# ☕ Slash Coffee Emporium - Smart Coffee Shop Website

Welcome to **Slash Coffee Emporium**, a modern web-based coffee ordering system designed to enhance the in-store experience! Customers can scan a QR code in-store to access the website, browse available coffee items, and place orders directly from their devices. An intuitive admin panel allows shop owners to manage products, orders, and customer feedback with ease.

---

## 🔗 Live Website

🌐 [Visit Slash Coffee Emporium](https://slash-coffee-emporium.web.app)

---

## 📸 Preview

> ![Home Page](https://i.ibb.co.com/8nC0jc9m/home.png)
> ![All Products](https://i.ibb.co.com/Lh6tRMJk/products.png)
> ![Product Details](https://i.ibb.co.com/v4HQ61KV/coffeedetails.png)
> ![Shopping Cart](https://i.ibb.co.com/N2w3Wy78/shppingcart.png)
> ![Checkout Page](https://i.ibb.co.com/mVkdQP9w/checkout.png)
> ![Login As Admin](https://i.ibb.co.com/dsLLBPd0/login.png)
> ![Admin Panel](https://i.ibb.co.com/nNDCqgTq/manage.png)
> ![Manage Product](https://i.ibb.co.com/QFp89ZXd/manage-Produts.png)
> ![Add Product](https://i.ibb.co.com/1tKXmF2n/add-coffee.png)
> ![Footer](https://i.ibb.co.com/fYxDPbnT/footer-with-send-message.png)

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Deployment**: Firebase Hosting
- **Others**: QR Code access system

---

## ✨ Features

### 👤 For Customers
- Scan QR code at the shop to access the ordering system
- Browse available coffee items
- Place orders directly from the website
- Submit complaints or feedback

### 🔐 For Admins
- Secure login using Firebase email/password authentication
- Add, update, or delete coffee products
- View and manage customer orders
- See and address customer complaints

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/MujahidEmon/slash-coffee-client.git
cd slash-coffee-client
```

### 2. Install Dependencies
Install client and server packages:
```bash
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```

### 3. Environment Variables
Create a `.env` file in both the client and server folders.

#### Client (.env):
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

#### Server (.env):
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the App
```bash
# Start backend server
cd server
npm start

# Start frontend
cd ../client
npm start
```

---

## 📂 Folder Structure

```
slash-coffee-emporium/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── server/              # Express backend
│   └── routes/
│   └── controllers/
├── .env                 # Environment variables
└── README.md
```

---

## 🔐 Admin Access

You can create an admin user via Firebase Authentication (Email/Password). Only authenticated users will be able to access the admin dashboard.

---

## 🧑‍💻 Author

- 👨‍💻 Mujahid Emon  
- 📫 [GitHub Profile](https://github.com/MujahidEmon)

---

## 📨 Feedback

Feel free to open an [issue](https://github.com/MujahidEmon/slash-coffee-client/issues) if you have suggestions, bugs, or want to contribute!

---

## 📄 License

