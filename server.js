const express = require('express');
const path = require('node:path');
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res) => {
  res.status(404).json({ status: "404", message: "Not Found" });
});

/*
app.listen(8353, () => {
  console.log('Sistem Berjalan Di Port: 8353')
})
*/

// Deploy di vercel
module.exports = app;
