import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-screen-2xl'>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
