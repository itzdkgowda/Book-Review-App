📚 Book Review App
A full-stack web application that allows users to browse, add, and review books. Built with React, Tailwind CSS, Node.js, Express, and MongoDB.

🚀 Features
Add new books with title, author, genre, and year
Submit reviews for each book (with rating & comments)
Browse and filter books
View all community reviews
Responsive UI using Tailwind CSS

🧰 Tech Stack
Frontend:
React + Vite
Axios
React Router
Tailwind CSS

Backend:
Node.js + Express
MongoDB + Mongoose
CORS + dotenv

⚙️ Getting Started
Clone the repo

git clone https://github.com/your-username/book-review-app.git
cd book-review-app

cd book-review-backend
npm install
# create a .env file with your MongoDB URI:
# MONGO_URI=mongodb://localhost:27017/bookreviews
npm start

cd book-review-frontend
npm install
npm run dev

📦 Project Root

book-review-app/
├── book-review-frontend/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/                  # (Optional: logos/images)
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ReviewForm.jsx
│   │   ├── pages/
│   │   │   ├── AddBook.jsx
│   │   │   ├── AddReview.jsx
│   │   │   ├── BookDetails.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Profile.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── book-review-backend/
│   ├── config/
│   │   └── db.js                   # (Optional: separate DB connection)
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── README.md
│
└── README.md                      # Root-level project overview (optional)


📝 License
MIT — free to use, modify, and share.
