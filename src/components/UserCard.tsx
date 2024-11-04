import Image from "next/image";

interface ElementProps {
  type: string;
}

const UserCard = ({ type }: ElementProps) => {
  return (
    <div className="rounded-2xl p-4 odd:bg-myPurple even:bg-myYellow flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-green-600 py-1 px-2 bg-white rounded-xl">
          2025/21
        </span>

        <Image
          src="/more.png"
          alt="more"
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>

      <h1 className="text-2xl font-semibold my-4">1,200</h1>

      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
