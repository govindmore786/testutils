import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon

export default function About() {
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const dark = () => {
        setmystyle({ color: 'white', backgroundColor: 'black' });
    };

    const normal = () => {
        setmystyle({ color: 'black', backgroundColor: 'white' });
    };

    return (
        <div style={{ ...mystyle, minHeight: '100vh', padding: '20px' }}>
            <h1>About Us</h1>
            <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Hello everyone,<br />
                Hi, I'm <b>Govind More</b>, a third-year B.Tech student and a passionate <b>MERN stack developer</b>.
                I built this website as a <b>learning project</b> to enhance my skills in React, front-end development, and modern web technologies.
                Along with web development, I have <b>strong programming skills in C++</b>, which help me in problem-solving and algorithmic thinking.
                <br /><br />
                <b>Check out my latest project:</b>
            </p>

            {/* Styled Spotlight Project Link */}
            <a 
                href="https://spotlight-final.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={spotlightButtonStyle}
            >
                🌟 Explore Spotlight Project <FaArrowRight />
            </a>

            <p style={{ fontSize: '20px', lineHeight: '1.6', marginTop: '20px' }}>
                Spotlight is a platform where users can <b>share experiences</b> by uploading images, videos, and expressing their thoughts through text.
                This project helped me gain deeper insights into handling <b>media uploads, database management, and UI/UX improvements</b>.
            </p>

            <div>
                <button onClick={dark} style={buttonStyle}>Dark Mode 🌙</button>
                <button onClick={normal} style={buttonStyle}>Light Mode ☀️</button>
            </div>
        </div>
    );
}

// Spotlight Button Styling
const spotlightButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 18px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#ff9800',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

// Button Hover Effect
spotlightButtonStyle[':hover'] = {
    backgroundColor: '#e68900',
    transform: 'scale(1.05)'
};

// Dark Mode & Light Mode Buttons
const buttonStyle = {
    padding: '10px 15px',
    margin: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white'
};
