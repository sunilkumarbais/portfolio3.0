import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lodder, setLodder] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const FETCH_URL = import.meta.env.VITE_API_URL;

  async function submitHandle() {
    try{
      setLodder(true);

      const response = await fetch(`${FETCH_URL}/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();
      
      setData(data);
      setError(!data.success)
    }catch(err){
      setError(true);
      setData(err.message);
    }finally{
      setLodder(false);
      setEmail("")
      setMessage("")
    }
  }

  return (
    <section className="min-h-screen max-w-[1400px] mx-auto bg-blue-600/20 text-white fade-in">
      <div className="flex flex-col md:flex-row justify-center items-center px-4">
        {/* Contact Form */}
        <div
          className="mt-12 md:mt-20 w-full max-w-md
                        rounded-2xl bg-blue-300/10
                        px-5 py-8 md:px-10
                        shadow-xl hover:shadow-2xl
                        transition-all duration-300"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            Contact Me
          </h1>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm">
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 rounded-lg
                         bg-transparent border border-gray-400
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="example@email.com"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-2 rounded-lg
                         bg-transparent border border-gray-400
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write message here..."
            />
          </div>

          {/* Button */}
          <button
            onClick={submitHandle}
            className="w-full mt-6 py-2 rounded-lg font-semibold border         border-yellow-400
                       text-yellow-500
                       hover:bg-yellow-400
                       hover:text-black
                       transition-all duration-300"
          >
            {lodder ? "Sending..." : "Send Message"}
          </button>
          <span className={`${error ? "text-red-300" : "text-green-500"} block text-center mt-5`}>{data?.message || " "}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
