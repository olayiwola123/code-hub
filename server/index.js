const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "certificate_porta",
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  db.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).send({ error: "Database error" });
      }
      if (results.length > 0) {
        return res.status(400).send({ message: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const SQL =
        "INSERT INTO Users (email, username, password) VALUES (?, ?, ?)";
      db.query(SQL, [email, username, hashedPassword], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ error: "Database error" });
        }
        console.log("User Inserted Successfully!");
        res.send({ message: "User added" });
      });
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).send({ error: "Database error" });
      }
      if (results.length === 0) {
        return res.status(400).send({ message: "User not found" });
      }

      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).send({ message: "Invalid password" });
      }

      res.send({ message: "Login successful" });
    }
  );
});


app.get("/users", ( res) => {
  db.query("SELECT id, email, username FROM Users", (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Database error" });
    }
    res.send(results);
  });
});

