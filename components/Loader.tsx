import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full gap-2">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
      <h1 className='text-2xl font-bold text-white'>Loading...</h1>
    </div>
  );
};

export default Loader;