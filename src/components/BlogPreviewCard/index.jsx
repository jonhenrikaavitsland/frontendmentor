import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function BlogPreviewCard() {
  return (
    <div>
      <div></div>
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
