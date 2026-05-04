# 🏨 Wanderlust - Airbnb Clone

Wanderlust is a full-stack web application that allows users to list, discover, and review unique accommodations around the world. Built with the MERN stack (specifically focusing on **Express, EJS, and MongoDB**), it mimics the core functionality of Airbnb.

🚀 **Live Demo:** [https://airbnb-clone-mddl.onrender.com](https://airbnb-clone-mddl.onrender.com)

---

## ✨ Features

- **User Authentication**: Secure signup and login using Passport.js.
- **Listing Management**: Users can create, edit, and delete their own travel listings.
- **Image Uploads**: Integrated with **Cloudinary** for high-performance image hosting.
- **Review System**: Guests can leave star ratings and comments on listings.
- **Interactive Maps**: View locations on an interactive map using Leaflet.js.
- **Responsive Design**: Fully responsive UI built with **Bootstrap** and custom CSS.
- **Error Handling**: Custom middleware for robust error management and user feedback (Flash messages).

---

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript Templates), Bootstrap 5, Custom CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (NoSQL)
- **Authentication**: Passport.js, Passport-Local
- **File Storage**: Cloudinary (via Multer & Multer-Storage-Cloudinary)
- **Form Validation**: Joi

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/eshwarprudhvi/airbnb-clone.git
cd airbnb-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your credentials:
```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
ATLASDBURL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
```

### 4. Seed the Database (Optional)
To populate the database with initial sample data:
```bash
cd init
node index.js
```

### 5. Run the Application
```bash
npm start
```
The app will be running at `http://localhost:8080` (or your specified port).

---

## 📁 Project Structure

```
├── Models/          # Mongoose Schemas (Listing, Review, User)
├── controllers/     # Route logic (MVC Pattern)
├── public/          # Static assets (CSS, JS, Images)
├── routes/          # Express Routers
├── views/           # EJS Templates
├── middleware.js    # Custom Authentication & Validation middleware
├── app.js           # Main Entry point
└── cloudConfig.js   # Cloudinary configuration
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/eshwarprudhvi/airbnb-clone/issues).




*Developed by [Eshwar Prudhvi](https://github.com/eshwarprudhvi)*
