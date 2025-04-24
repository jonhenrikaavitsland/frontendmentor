import { Figtree } from 'next/font/google';
import Image from 'next/image';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function BlogPreviewCard() {
  return (
    <div className='bg-white p-6 rounded-2.5xl shadow-custom-two'>
      <div>
        <Image
          src='/project/blog-preview-card/illustration-article.svg'
          width={288}
          height={288}
          alt='qr-code'
          className='rounded-0.5xl'
        />
      </div>
      <section>
        <div>
          <span>learning</span>
        </div>
        <p>published 21 dec 2023</p>
        <h2>
          <span>html & css</span> foundations
        </h2>
        <p>
          These languages are the backbone of every website,
          defining structure, content, and presentation.
        </p>
      </section>
      <div>
        <div></div>
        <span>greg hooper</span>
      </div>
    </div>
  );
}
