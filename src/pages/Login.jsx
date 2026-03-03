import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-black via-[#111] to-[#0CC8A8] text-white p-12 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Fenrir Security</h1>
          <p className="text-gray-300 text-lg">
            AI-powered vulnerability scanning platform
          </p>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li>✔ Real-time vulnerability detection</li>
          <li>✔ Automated security reporting</li>
          <li>✔ Enterprise-grade compliance</li>
          <li>✔ Smart severity classification</li>
        </ul>

        <p className="text-sm text-gray-400">
          © 2026 Fenrir Security Private Limited
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 dark:bg-[#0F0F0F] px-6">
        <div className="w-full max-w-md bg-white dark:bg-[#1A1A1A] p-8 rounded-xl shadow-xl">

          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <input type="checkbox" required />
              <span>I agree to the Terms & Privacy Policy</span>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 dark:border-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Continue with Apple
            </button>
            <button className="w-full border border-gray-300 dark:border-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Continue with Google
            </button>
            <button className="w-full border border-gray-300 dark:border-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Continue with Meta
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}