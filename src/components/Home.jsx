function Home() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Profile Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src="src/assets/HeadShot.png"
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-6">
            Hi! My name is Matthew Arenas, a Software Engineer at ThunderGraph and a Brooklyn College Graduate. I am passionate about software development, data science, and creating
            innovative solutions to real-world problems. At ThunderGraph, I have worked on enhancing our graph-based data visualization platform, including implementing editable React Flow nodes, relationship deletion, chat history integration, and UI improvements for onboarding and feed visibility. I also integrated API endpoints with GraphQL to dynamically display AI-generated models to users.
          </p>
          <p className="text-gray-700 mb-6">
            My technical expertise spans programming languages such as Java, Python, JavaScript, and SQL, and I have hands-on experience with frameworks and tools like React, Node.js, PostgreSQL, and GraphQL. I enjoy building scalable, efficient applications and leveraging data-driven insights to improve user experiences.
          </p>
          <p className="text-gray-700 mb-6">
            I also had the privilege of participating in the Project Basta Google Software Engineering Program (G-SWEP),
            where I developed critical problem-solving and technical interview skills. These experiences, along with my current work at ThunderGraph and fellowship with CUNY Tech Prep, have strengthened my passion for coding and my drive to deliver impactful software solutions.
          </p>
          {/* Skills Section */}
          <h3 className="text-xl font-semibold mt-8">Skills</h3>
          <ul className="list-disc list-inside mt-4 text-left">
            <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript, Java, SQL, Python</li>
            <li><strong>Frameworks:</strong> Node.js, Express, React, Tailwind CSS, Bootstrap</li>
            <li><strong>Tools and Technologies:</strong> PostgreSQL, Git, GitHub, GitHub Pages, Project Management Board (GitHub Projects), REST APIs, Postman, Figma, NPM, Maven, Subversion, Chrome DevTools</li>
            <li><strong>Techniques and Protocols:</strong> Agile, HTTP, Responsive Design</li>
            <li><strong>Natural Languages:</strong> English (Fluent), Spanish (Fluent)</li>
            <li><strong>Certification:</strong> Codepath iOS Mobile Application Development Course</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
