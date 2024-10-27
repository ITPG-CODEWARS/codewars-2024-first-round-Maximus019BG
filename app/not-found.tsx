import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover relative" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-75"></div>
            <div className="text-center relative z-10">
                <h1 className="text-9xl font-extrabold text-white drop-shadow-lg animate-bounce">404</h1>
                <p className="text-xl text-gray-300 mb-4 animate-fade-in">
                    It seems the page you&apos;re looking for has gone off the tracks.
                </p>
                <p className="text-lg text-gray-400 mb-8 animate-typewriter">
                    But don&apos;t worry, you can find your way back.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-900"
                > Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;