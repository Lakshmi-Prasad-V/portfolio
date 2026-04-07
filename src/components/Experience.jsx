function Experience() {
  return (
    <section id="experience" className="py-6 px-6 bg-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto">

        {/* Experience Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-md transition">

          {/* Role + Company */}
          <h3 className="text-xl md:text-2xl font-semibold text-black">
            Cloud Developer Associate
          </h3>

          <p className="text-blue-600 font-medium mt-1">
            Advaitecs Private Limited
          </p>

          {/* Duration */}
          <p className="text-gray-500 text-sm mb-4">
            October 2025 – Present
          </p>

          {/* Points */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Built and maintained the company website using modern web technologies including HTML, CSS, JavaScript and PHP.
            </li>
            <li>
              Contributed to the development of the SkaiMitra LMS platform.
            </li>
            <li>
              Designed and implemented Micro:bit-based projects for educational applications.
            </li>
            <li>
              Utilized AWS services for deployment and cloud operations. 
            </li>
            <li>
              Collaborated with team members to deliver efficient and user-friendly solutions.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;