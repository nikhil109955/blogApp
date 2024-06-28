import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleRegisterClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500'>
      <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center transition transform hover:scale-105'>
        <h1 className='text-4xl font-bold text-center my-7 text-gray-800'>
          About Nikhil's Blog
        </h1>
        <div className='text-md text-gray-600 flex flex-col gap-6'>
          <p>
            Welcome to Nikhil's Blog! This blog was created by Nikhil Kumar as a personal project to share his thoughts and ideas with the world. Nikhil is a passionate developer who loves to write about technology, coding, and everything in between.
          </p>
          <p>
            On this blog, you'll find weekly articles and tutorials on topics such as web development, software engineering, and programming languages. Nikhil is always learning and exploring new technologies, so be sure to check back often for new content!
          </p>
          <p>
            We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve. Register yourself to connect.
          </p>
          <p>
            With 7 years of full-stack development experience, Nikhil has a deep understanding of both front-end and back-end technologies. From working with frameworks like React and Angular to managing databases and server-side logic, Nikhil brings a wealth of knowledge and practical insights to his blog. Whether you're a beginner or an experienced developer, there's always something new to learn and discuss.
          </p>
        </div>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleRegisterClick}
          className={`mt-6 px-6 py-3 text-white font-semibold rounded-lg transition ${hovered ? 'bg-blue-600' : 'bg-purple-600'} hover:shadow-lg transform hover:scale-110`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
