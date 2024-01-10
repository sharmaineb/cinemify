import React from 'react';

const LandingContent = () => {
  return (
    <div>
      {/* hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">Unlock the Magic of Cinema</h1>
        <p className="text-xl mb-8">Experience movies like never before with Cinemify. Discover a new dimension of entertainment.</p>
        <a href="/home" className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Discover Now</a>
      </div>

      {/* features Section */}
      <div id="features" className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Lorem ipsum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* individual feature components */}
          <FeatureCard title="Placeholder" description="Placeholder" />
          <FeatureCard title="Placeholder" description="Placeholder" />
          <FeatureCard title="Placeholder" description="Placeholder" />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default LandingContent;
