import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }

    setLoading(true);
    try {
      // Send POST request to backend
      const res = await fetch("https://pabassignment.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Backend returned an error
        throw new Error(data.error || "Server error");
      }

      // Success
      setStatus({ type: "success", text: "Message sent successfully!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      // Network or server error
      setStatus({
        type: "error",
        text: err.message || "Something went wrong. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-12 px-4 flex justify-center w-full">
      <div className="w-full max-w-lg bg-blue-50 rounded-xl shadow-lg border border-blue-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Have questions? We’d love to hear from you!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
