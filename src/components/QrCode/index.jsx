import { Outfit } from 'next/font/google';
import Image from 'next/image';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function QrCode() {
  return (
    <div
      className={`p-4 bg-white rounded-2.5xl max-w-xs flex flex-col gap-6 text-center shadow-custom-one mx-6 ${outfit.className}`}
    >
      <div>
        <Image
          src='/project/qr-code/image-qr-code.png'
          width={288}
          height={288}
          alt='qr-code'
          className='rounded-0.5xl'
        />
      </div>
      <section className='flex flex-col gap-4'>
        <h2 className='text-slate-900 font-bold text-1.5xl/[120%]'>
          Improve your front-end skills by building projects
        </h2>
        <p className='text-slate-500 text-sm-extra/[140%] max-w-3xs mx-auto mb-6'>
          Scan the QR code to visit Frontend Mentor and take your
          coding skills to the next level
        </p>
      </section>
    </div>
  );
}
