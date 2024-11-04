import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/*Search bar  */}
      <div className="hidden md:flex items-center gap=2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" height={14} width={14} />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-[200px] p-2"
        />
      </div>
      {/*Icons and User*/}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" alt="message" height={20} width={20} />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src="/announcement.png" alt="message" height={20} width={20} />

          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">
            1
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs leading-3 font-medium">John Doe</span>

          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt="avatar"
          height={36}
          width={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
