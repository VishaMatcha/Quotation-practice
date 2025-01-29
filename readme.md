# 🏆 Motivational Quotes Web App

## 🌟 Overview
This is a simple **Motivational Quotes Web App** built with **Node.js** and **Express.js**. The app fetches random motivational quotes from an external CSV file and displays them in a beautifully designed webpage.

### ✨ Features
- 📝 Fetches **random motivational quotes** dynamically.
- 🎨 Simple and **responsive UI** with elegant styling.
- 🖼️ Displays a **logo and brand name** at the top.
- 🚀 **Dockerized** for easy deployment.

---

## 🚀 Getting Started

### **1️⃣ Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/get-started) (if using Docker)

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Run the Applications**
```bash
node server.js
```
## 🐳 Running with Docker

### **1️⃣ Build the Docker Image**
```bash
docker build -t motivational-quotes-app .
```
### **2️⃣ Run the Docker Container**
```bash
docker run -p 3000:3000 motivational-quotes-app
```
Now, visit:
```
http://localhost:3000
```

📂 Project Structure
```yaml
quotation/
├── public/           # Static files (CSS, Images)
│   ├── styles.css       # Styling for the webpage
│   ├── logo.png         # Logo displayed on the page
│
├── index.js          # Runs a random quote in terminal
├── server.js         # Main Express server file
├── quotes.js         # Fetches quotes from an external source
├── package.json      # Project dependencies
├── Dockerfile        # Docker instructions
├── .dockerignore     # Files to ignore in Docker
├── README.md         # Project documentation
```

### 🛠️ Technologies Used
- Node.js - JavaScript runtime
- Express.js - Web framework
- Axios - HTTP requestsr
- PapaParse - CSV file parsing
- Docker - Containerization
- HTML/CSS - Frontend styling