const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve your HTML file (assuming it's in the same directory and named index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // This is for Gmail. Change if using a different provider
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: 'Pastelariadasollimeira@gmail.com', // Your email
      pass: 'lalalinda' // Your email password or app-specific password
    }
  });

  // Setup email data
  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'Pastelariadasollimeira@gmail.com', // The email where you want to receive messages
    subject: `New message from ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Could not send email');
    } else {
      console.log('Message sent: %s', info.messageId);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});