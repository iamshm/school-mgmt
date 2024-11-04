import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left  */}
      <div className="w-[15%] md:w-[8%] lg:w-[15%]">
        <Link
          href="/"
          className="flex place-items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image src="/logo.png" alt="logo" height={32} width={32} />
          <span className="hidden lg:block">SchooLama</span>
        </Link>

        <Menu />
      </div>

      {/* right  */}
      <div className="w-[85%] md:w-[92%] lg:w-[85%] bg-[#f7f8fa] overflow-scroll">
        <Navbar />

        {children}
      </div>
    </div>
  );
}
