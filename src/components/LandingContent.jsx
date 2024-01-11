import React from 'react';

const LandingContent = () => {
  return (
    <div className='relative'>
      {/* background */}
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://t4.ftcdn.net/jpg/01/42/74/69/240_F_142746987_BVWkVQgZkbpFzUnxYLjAb0hSX4owbShd.jpg`}
          alt='/'
        />
      </div>
      {/* animated text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300 font-bold">
            Hello, Movie Lovers!
          </h1>
        </div>
      </div>
      {/* hero Section */}
      <div className="bg-gradient-to-r from-white to-neutral-700 text-white py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">Unlock the Magic of Cinema</h1>
        <p className="text-xl mb-8">Discover Movies Through Trailers.</p>
        <a href="/home" className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Discover Now</a>
      </div>

      {/* features Section */}
      <div id="features" className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* individual feature components */}
          <FeatureCard title="Discover Movies" description="Explore a vast collection of movies and discover new releases." />
          <FeatureCard title="Watchlist" description="Create a watchlist by adding movies you want to watch later." />
          <FeatureCard title="Statistics" description="Track your movie-watching habits with insightful statistics." />
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


// import React from 'react';

// const LandingContent = () => {
//   return (
//     <div className='relative'>
//       {/* background */}
//       <div className='w-full h-full'>
//         <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
//         <img
//           className='w-full h-full object-cover'
//           src={`https://t4.ftcdn.net/jpg/01/42/74/69/240_F_142746987_BVWkVQgZkbpFzUnxYLjAb0hSX4owbShd.jpg`}
//           alt='/'
//         />
//       </div>
//       {/* animated text */}
//       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//       <div className="w-max">
//         <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300 font-bold">
//           Hello, Movie Lovers!
//         </h1>
//       </div>
//     </div>
//       {/* hero Section */}
//       <div className="bg-gradient-to-r from-white to-neutral-700 text-white py-20 text-center">
//         <h1 className="text-6xl font-bold mb-4">Unlock the Magic of Cinema</h1>
//         <p className="text-xl mb-8">Discover Movies Through Trailers.</p>
//         <a href="/home" className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Discover Now</a>
//       </div>

//       {/* features Section */}
//       <div id="features" className="py-16">
//         <h2 className="text-4xl font-bold mb-8 text-center">Lorem ipsum</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* individual feature components */}
//           <FeatureCard title="Placeholder" description="Placeholder" />
//           <FeatureCard title="Placeholder" description="Placeholder" />
//           <FeatureCard title="Placeholder" description="Placeholder" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ title, description }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default LandingContent;

