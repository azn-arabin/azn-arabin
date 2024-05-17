import Image from "next/image";
import logo from "@/assets/icons/logo.png";

const UserLayoutLoading = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <Image src={logo} alt={"azn-arabin"} width={100} height={100} />
    </div>
  );
};

export default UserLayoutLoading;
