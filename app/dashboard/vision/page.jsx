import React from 'react';

function Vision() {
  return (
    <div className="p-5 min-h-full">
      {/* Vision Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold  mb-4">Our Vision</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Our vision is to create a future where innovative technology and education converge, 
          enabling individuals to unlock their full potential. We strive to foster a global community of learners, 
          thinkers, and creators who are equipped to solve tomorrow's challenges.
        </p>
      </section>

      {/* Key Principles Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Principle 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold  mb-3">Innovation</h2>
          <p className="text-gray-500 text-sm">
            We believe in pushing the boundaries of what’s possible. Our vision is driven by a relentless pursuit of innovation, harnessing the latest advancements in AI, technology, and education to create tools that empower individuals.
          </p>
        </div>

        {/* Principle 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold  mb-3">Accessibility</h2>
          <p className="text-gray-500 text-sm">
            Our goal is to make learning accessible to everyone, regardless of background or resources. By providing cutting-edge tools, we aim to democratize knowledge and ensure that every individual has the opportunity to grow.
          </p>
        </div>

        {/* Principle 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold  mb-3">Community</h2>
          <p className="text-gray-500 text-sm">
            We envision a world where learning is a shared experience. Through collaboration and community building, we aim to cultivate a global network of learners, educators, and innovators who can work together to shape the future.
          </p>
        </div>
      </section>

     
    </div>
  );
}

export default Vision;
