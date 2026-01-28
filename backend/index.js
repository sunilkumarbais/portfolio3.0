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
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
    });

    // Mail to YOU
    await transporter.sendMail({
      from: "Sunil kumar <sunilkumarbais46@gmail.com>",
      to: "sunilkumarbais46@gmail.com",
      subject: "New Portfolio Contact Message",
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    // Auto reply
    await transporter.sendMail({
      from: "Sunil kumar <sunilkumarbais46@gmail.com>",
      to: email,
      subject: "Thanks for contacting me 👋",
      text: `Hi,

        Thank you for reaching out through my portfolio website.
        I’ve received your message and will get back to you soon.

        Best regards,
        Sunil Kumar
        MERN Stack Developer`,
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
