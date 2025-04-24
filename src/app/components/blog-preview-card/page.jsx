import BlogPreviewCard from '@/components/BlogPreviewCard';

export const metadata = {
  title: 'Blog preview card | My Frontend Mentor Portfolio',
};

export default function Page() {
  return (
    <div className='bg-yellow-custom flex grow justify-center items-center'>
      <h1 className='sr-only'>blog preview card</h1>
      <BlogPreviewCard />
    </div>
  );
}
