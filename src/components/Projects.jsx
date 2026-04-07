function Projects() {
  return (
    <section id="projects" className="py-6 px-6 bg-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">
            Cervical Disease Detection
          </h3>

          <p className="text-gray-600 mb-4">
            Web-based system using CNN models to detect cervical diseases from medical images.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">Python</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">ML</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">Deep Learning</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">
            Company Website
          </h3>

          <p className="text-gray-600 mb-4">
            Responsive company website with dynamic backend functionalities and optimized performance.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">HTML</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">CSS</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">PHP</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">
            AWS 3-Tier Architecture
          </h3>

          <p className="text-gray-600 mb-4">
            Deployed a scalable cloud architecture using AWS services with load balancing and auto-scaling.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">AWS</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">EC2</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">RDS</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">S3</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;