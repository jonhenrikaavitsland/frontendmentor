import { Figtree } from 'next/font/google';
import Image from 'next/image';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function BlogPreviewCard() {
  return (
    <div
      className={`bg-white p-6 rounded-2.5xl shadow-custom-two flex flex-col gap-6 max-w-sm mx-6 border border-gray-950 text-gray-950  ${figtree.className}`}
    >
      <div>
        <Image
          src='/project/blog-preview-card/illustration-article.svg'
          width={400}
          height={200}
          alt='qr-code'
          className='rounded-0.5xl'
        />
      </div>
      <section className='flex flex-col gap-3'>
        <div className='capitalize bg-yellow-custom font-extrabold text-xs/normal px-3 py-1 w-min xs:text-sm/normal'>
          <span>learning</span>
        </div>
        <p className='text-xs/normal capitalize xs:text-sm/normal'>
          published 21 dec 2023
        </p>
        <h2 className='font-extrabold text-xl/normal xs:text-2xl/normal'>
          <span className='uppercase'>html & css</span> foundations
        </h2>
        <p className='text-gray-500 text-sm/normal xs:text-base'>
          These languages are the backbone of every website,
          defining structure, content, and presentation.
        </p>
      </section>
      <div className='flex gap-3 capitalize font-extrabold text-sm/normal items-center'>
        <div>
          <Image
            src='/project/blog-preview-card/image-avatar.webp'
            width={32}
            height={32}
            alt='the author'
            className='rounded-full'
          />
        </div>
        <span>greg hooper</span>
      </div>
    </div>
  );
}
