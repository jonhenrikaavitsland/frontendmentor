import QrCode from '@/components/QrCode';

export const metadata = {
  title: 'Qr-Code | My Frontend Mentor Portfolio',
};

export default function Page() {
  return (
    <div className='bg-slate-300 grow flex justify-center items-center'>
      <h1 className='sr-only'>qr-code component</h1>
      <QrCode />
    </div>
  );
}
