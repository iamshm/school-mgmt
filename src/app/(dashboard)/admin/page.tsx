import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <UserCard type="student" />

          <UserCard type="teacher" />

          <UserCard type="parent" />

          <UserCard type="staff" />
        </div>

        {/* Middle chart */}

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">right middle chart</div>
        </div>
        {/* Bottom chart */}
        <div>Bottom</div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
