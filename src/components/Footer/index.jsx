'use client';

import { useRouter } from 'next/navigation';

const Footer = ({ authorName = 'Jon Henrik Åvitsland' }) => {
  const router = useRouter();

  const handleAuthorClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <footer className='text-center'>
      <p>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener noreferrer'
          className='capitalize'
        >
          frontend mentor
        </a>
        . Coded by{' '}
        <a
          href='#'
          onClick={handleAuthorClick}
          className='underline'
        >
          {authorName}
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
