import React from 'react';

const experiences = [
  {
    company: 'Accenture',
    role: 'Social Media Analyst',
    duration: 'Feb 2021 – Aug 2022',
    location: 'Mumbai, India',
    responsibilities: [
      'Moderated 2500+ user profiles, videos, and text-based content, identifying and escalating issues promptly.',
      'Collaborated in a 30-member team to review over 1 million pieces of content in 4 months, ensuring adherence to company guidelines.',
      'Implemented updates that led to a 400% increase in objectionable content removal.',
      'Improved operational efficiency, reducing content moderation backlog by 50%.',
      'Managed team data using Excel and Google Spreadsheets, introducing innovative tool ideas to enhance customer satisfaction.'
    ],
    logo: 'https://yt3.googleusercontent.com/_mtf7vCqvNqWvS8Q6VfIgEZJ5PwnUP9fuE78VzPDMoc4pTVA6crwEwSef1HejeY1BRqLtuJpIr4=s160-c-k-c0x00ffffff-no-rj'
  }
   {
    company: 'Perspectiwitty',
    role: 'Junior Web Developer',
    duration: 'April 2025 – Present',
    location: 'Mumbai, India',
    responsibilities: [
      'Developing responsive websites and landing pages using HTML, CSS, and JavaScript.',
      'Customizing and maintaining WordPress sites, ensuring mobile responsiveness and SEO-friendly structures.',
      'Collaborating with designers to translate Figma designs into functional web components.',
      'Performing cross-browser testing and fixing UI/UX issues for smooth user experience.',
    ],
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAMAAAC0hZ1zAAAAb1BMVEX////6+vrR0dHX19evr6+Xl5fJycnr6+sAAAABAQYLCw0RERIWFhh3d3eOjo5xcXKenp6/v78hISIoKCmUlJRpaWkeHh9QUFElJSY6OjtGRkdYWFmoqKgzMzTU1NTz8/O0tLSDg4Pi4uJMTEyIiIg1auN4AAAA8UlEQVR4AZXMBYKEMBAEwMbCxJCgi8Pt/994SeBct+LSgwcEYRjFCcN3UuKCS0Ua70VZXpSFKXnl8RpvGlKtkkolXV95lOIS3FR1ErGoPDPgMrbVpR9y45a+EhN8OKTqVT9XVSuHrjddscCaVGuj0lRK2leh8mIFyQ1ezbO9laUWBZP9zHJYC5XwNJV7K5aR2E797UhgxbTCy2ktFKEmdhSUQMOKCKddICZCuQXA0wTtMuEdHmNNcNwJXrysY/MuWUSufrLBiaZo8/cGToDNlTgY4BfJcrdOOGXTAYCmFMBaEHNXIy4bc9dTGsJK4xT/8wwo5xFv2sFOFAAAAABJRU5ErkJggg=='
  }
];

function Experience() {
  return (
    <div className="flex flex-col items-start text-3xl font-mono font-bold text-start p-8 rounded-lg border border-cyan-400	 shadow-2xl max-w-3xl mx-auto mt-10 transition-transform transform hover:scale-105 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center mb-2 space-x-3">
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`} 
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-2xl font-semibold">{experience.company}</h2>
          </div>
          <p className="text-xl text-sky-400">{experience.role}</p>
          <p className="text-sm text-sky-400">{experience.duration} - {experience.location}</p>
          <ul className="list-disc pl-5 mt-4">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-base text-white mb-2">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
