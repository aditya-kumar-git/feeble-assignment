import { CoupIcon } from "@/app/icons";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex items-center justify-center pt-[30px] pb-0 bg-full ">
      <div className="element-shadow w-[62vw] bg-white rounded-[200px] py-[0.8vw] px-[1.2vw] flex items-center justify-between">
        <Image
          src={CoupIcon.src}
          alt="Coup Icon"
          className="w-[5.5vw]"
          width={107}
          height={34}
        />
        <nav>
          <ul className="flex items-center gap-[0.7vw] text-[0.8vw] font-medium">
            <li className="duration-300 px-[0.8vw] py-[0.5vw] text-[#8C97A8] hover:text-black cursor-pointer">
              How it Works
            </li>
            <li className="duration-300 px-[0.8vw] py-[0.5vw] text-[#8C97A8] hover:text-black cursor-pointer">
              Pricing
            </li>
            <li className="duration-300 px-[0.8vw] py-[0.5vw] text-[#8C97A8] hover:text-black cursor-pointer">
              Use Case
            </li>
            <li className="duration-300 px-[0.8vw] py-[0.5vw] text-[#8C97A8] hover:text-black cursor-pointer">
              FAQ
            </li>
          </ul>
        </nav>
        <button className="bg-[var(--primary)] text-white text-[0.9vw] font-medium px-[0.8vw] py-[0.5vw] flex items-center justify-center rounded-[100px] cursor-pointer">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
