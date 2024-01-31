// Card.jsx
import React from 'react';

const Card = ({ name, description, interests, linkedinUrl, xUrl }) => {
    return (
        <div className='flex-col border-2 w-80 p-4 m-4 bg-white rounded-md shadow-md'>
            <p className='text-xl font-bold mb-2'>{name}</p>
            <p className='text-gray-600 mb-4'>{description}</p>
            <h3 className='text-lg font-bold mb-2'>Interests</h3>
            {interests.map((item, index) => (
                <p key={index} className='text-gray-600 mb-1'>
                    {item}
                </p>
            ))}
            <div className='flex space-x-2 mt-4'>
                <button
                    className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'
                    onClick={() => window.open(linkedinUrl, "_blank")}
                >
                    LinkedIn
                </button>
                <button
                    className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'
                    onClick={() => window.open(xUrl, "_blank")}
                >
                    Twitter
                </button>
            </div>
        </div>
    );
};

export default Card;
