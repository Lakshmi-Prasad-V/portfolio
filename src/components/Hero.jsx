function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 mt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Hi, I'm <span className="text-blue-600">Lakshmi Prasad</span> 👋
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Full Stack Developer
          </h2>

          <p className="text-blue-600 font-medium mb-4">
            AWS Certified Developer – Associate ☁️
          </p>

          <p className="text-gray-600 text-lg mb-6">
            Building scalable web applications with modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <a
              href="/Lakshmi_Prasad_Veerla_Resume.pdf"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Download Resume
            </a>

            <button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/Prasad.png"
            alt="profile"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;