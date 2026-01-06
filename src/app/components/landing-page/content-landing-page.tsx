import { AppleIcon, MessageIcon, TopBird } from "@/app/icons";
import Image from "next/image";

export default function ContentLandingPage() {
  return (
    <div className="mt-[3.5vw] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[24px] w-fit relative">
        {/* Top Birds */}
        <Image
          src={TopBird.src}
          alt="Top Bird One"
          width={43}
          height={14}
          className="absolute top-[5.8vw] left-[-18vw] w-[2.2vw]"
        />
        <Image
          src={TopBird.src}
          alt="Top Bird One"
          width={43}
          height={14}
          className="absolute top-[7.8vw] left-[-7.5vw] w-[2.2vw]"
        />
        <Image
          src={TopBird.src}
          alt="Top Bird One"
          width={43}
          height={14}
          className="absolute top-[6.5vw] right-[-9vw] w-[2.2vw]"
        />
        <Image
          src={TopBird.src}
          alt="Top Bird One"
          width={43}
          height={14}
          className="absolute top-[14.5vw] right-[-11vw] w-[2.2vw]"
        />
        {/* Top Birds */}
        <div className="shadow flex bg-white rounded-[200px] px-[0.4vw] py-[0.2vw] gap-[0.5vw]">
          <Image
            src={MessageIcon.src}
            alt="Message Icon"
            className="w-[1.5vw]"
            width={32}
            height={17}
          />
          <div className="text-[0.8vw] font-medium text-[var(--primary)] leading-[1.2]">
            #1 iMessage Automation Tool
          </div>
        </div>
        <div className="text-[3.2vw] font-[700] text-center leading-[1.2]">
          <span className="text-[var(--primary)]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </div>
        <div className="text-[0.9vw] font-[400] text-center leading-[1.2]">
          Coup lets you, your team, or AI workflows send iMessages directly from
          <br />
          your phone number, running securely on your Mac or Mac Mini.
        </div>
        <div className="flex items-center justify-center gap-[0.5vw] text-[0.9vw] font-medium mt-[1.2vw]">
          <button className="bg-[var(--primary)] text-white h-[2.3vw] px-[1vw] flex items-center justify-center rounded-[100px] cursor-pointer">
            Get Started
          </button>
          <button className="text-black border border-[#6D778F] h-[2.3vw] px-[1vw] flex items-center justify-center rounded-[100px] cursor-pointer gap-[0.5vw]">
            <Image
              src={AppleIcon.src}
              alt="Apple Icon"
              className="w-[1vw]"
              width={19}
              height={22}
            />
            <div className="w-[1px] h-[16px] bg-[#6D778F]" />
            <div>Download the Mac app</div>
          </button>
        </div>
      </div>
    </div>
  );
}
