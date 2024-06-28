import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
          Want to learn more about JavaScript?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 100 JavaScript Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mb-4'>
          <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
            100 JavaScript Projects
          </a>
        </Button>
        <div className='flex flex-col sm:flex-row gap-4'>
          <a href='https://github.com/nikhil109955' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/nikhil-kumar-419205234/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="p-7 flex-1">
        <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" alt="JavaScript Projects" />
      </div>
    </div>
  );
}
