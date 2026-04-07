function About() {
  return (
    <section id="about" className="py-6 px-6 bg-white">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        About Me
      </h2>

      {/* Two Boxes */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* SUMMARY BOX */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-4">
            Summary
          </h3>

          <p className="text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer with hands-on experience in building web applications using React and Node.js. 
            I have a strong interest in cloud technologies and hold an AWS Certified Developer – Associate certification. 
            I enjoy creating efficient and user-friendly solutions.
          </p>
        </div>

        {/* EDUCATION BOX */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-4">
            Education
          </h3>

          <h4 className="text-lg font-semibold text-black">
            B.Tech in Information Technology
          </h4>

          <p className="text-gray-600">
            Andhra Loyola Institute of Engineering and Technology / JNTUK
          </p>

          <p className="text-gray-500 text-sm">
            2020 – 2024
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;