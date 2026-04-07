import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          Lakshmi Prasad Veerla
        </h3>

        {/* LinkedIn */}
        <div className="flex justify-center mb-3">
          <a
            href="https://www.linkedin.com/in/lakshmi-prasad-veerla-a3106a263"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;