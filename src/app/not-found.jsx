import Link from 'next/link'; // If using Next.js

const NotFound = () => {
    return (
        <main className='text-center p-10'>
            <h1 className='text-[#244D3F] text-7xl font-black mb-4'>404</h1>
            <h2 className='text-3xl font-bold mb-2 opacity-70'>Page Not Found</h2>
            <p className='opacity-60'>Oops! The page you are looking for does not exist.</p>
            <Link href="/" className='btn bg-[#244D3F] text-white mt-5'>
                Go back home
            </Link>
        </main>
    );
};

export default NotFound;
