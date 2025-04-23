import QrCode from '@/components/qr-code';

export default function Page() {
  return (
    <div className='bg-slate-300 grow flex justify-center items-center'>
      <h1 className='sr-only'>qr-code component</h1>
      <QrCode />
    </div>
  );
}
