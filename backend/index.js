import express from "express";
import axios from "axios";
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
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    // Mail to YOU
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Sunil Kumar",
          email: "sunilkumarbais46@gmail.com",
        },
        to: [{ email: "sunilkumarbais46@gmail.com" }],
        replyTo: { email },
        subject: "Portfolio Contact Message",
        textContent: `From: ${email}\n\nMessage:\n${message}`,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // Auto reply
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Sunil Kumar",
          email: "sunilkumarbais46@gmail.com",
        },
        to: [{ email }],
        subject: "Thanks for contacting me 👋",
        textContent: "Thanks for contacting me. I will reply soon.",
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ success: true, message: "Email sent successfully" });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port : ${port}`)
})
