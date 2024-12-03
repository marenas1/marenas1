function About() {
    return (
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Profile Section */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src="src/assets/Headshot.jpg"
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* About Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 mb-6">
              I am a full stack developer with a passion for building scalable and efficient applications.
              Currently studying at Brooklyn College, I enjoy solving complex problems and constantly improving my skills.
              In my free time, I love learning new technologies and working on personal projects.
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
  
  export default About;
  