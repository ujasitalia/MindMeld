import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0 z-[80] bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount}></Sidebar>
      </div>
      <main className="md:pl-72 h-full bg-[#f8f9fa]">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
