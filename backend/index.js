import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "❌ Email and message are required",
      });
    }

    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailValidator.test(email)) {
      return res.status(401).json({
        success: false,
        message: "❌ Invalid email format",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // 10 sec
    });


    // Mail to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "Portfolio Contact Message",
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    // Auto-reply to USER
    await transporter.sendMail({
      from: `Sunil Kumar <${process.env.EMAIL}>`,
      to: email,
      subject: "Thanks for contacting me 👋",
      text: `
      Hi there,

      Thank you for reaching out through my portfolio website.
      I’ve received your message and will get back to you soon.

      Best regards,
      Sunil Kumar
      MERN Stack Developer
      `,
    });

    res.status(200).json({
      success: true,
      message: "✅ Message sent successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "❌ Error sending mail",
    });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port : ${port}`)
})
