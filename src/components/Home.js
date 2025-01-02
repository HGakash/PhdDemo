import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import scholorImage from './scholorImage.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const options = {
      strings: [
        "Discover a new way to connect, learn, and grow.",
        "Our platform offers state-of-the-art resources.",
        "Join us and start your journey today!"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${scholorImage})`,  //bg image
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="z-10 max-w-3xl text-center space-y-6 px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold">
          Welcome to <span className="text-indigo-400">Your Platform</span>
        </h1>
        
        <div className="text-lg sm:text-xl leading-relaxed">
          <span ref={typedRef}></span>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <button
            href="#"
            className="rounded-lg bg-indigo-500 hover:bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition"
          >
            About Us
          </button>
          <button
            onClick={()=>navigate('/signup')}
            className="rounded-lg bg-gray-800 hover:bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;