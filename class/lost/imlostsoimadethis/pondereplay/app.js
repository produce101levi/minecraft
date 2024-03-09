const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 9000; // You can choose any available port

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const question = req.body.question;

  // Append the question to a text file
  fs.appendFile('questions.txt', `${question}\n`, (err) => {
    if (err) throw err;
    console.log('Question submitted successfully');
  });

  // Optionally, you can redirect the user to a thank you page
  res.redirect('/thankyou.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
