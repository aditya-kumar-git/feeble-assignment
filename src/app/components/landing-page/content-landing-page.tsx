"use client";
import { AppleIcon, MessageIcon, TopBird } from "@/app/icons";
import { motion } from "motion/react";
import Image from "next/image";

export default function ContentLandingPage() {
  return (
    <div className="mt-[3.5vw] flex items-start justify-center flex-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-[24px] w-fit relative"
      >
        {/* Top Birds */}
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[100] left-[-20] md:top-[5.6vw] md:left-[-17.2vw] "
        >
          <Image
            src={TopBird.src}
            alt="Top Bird One"
            width={43}
            height={14}
            className="w-[40px] md:w-[2.2vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 800 }}
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[180] left-[0]  md:top-[7.5vw] md:left-[-7vw]"
        >
          <Image
            src={TopBird.src}
            alt="Top Bird Two"
            width={43}
            height={14}
            className="w-[40px] md:w-[2.2vw]"
          />
        </motion.div>
        <Image
          src={TopBird.src}
          alt="Top Bird Two"
          width={43}
          height={14}
          className="absolute top-[180] left-[0]  md:top-[7.5vw] md:left-[-7vw] w-[40px] md:w-[2.2vw]"
        />
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[200] right-[20] md:top-[6.2vw]  md:right-[-8.2vw]  "
        >
          <Image
            src={TopBird.src}
            alt="Top Bird Three"
            width={43}
            height={14}
            className="w-[40px] md:w-[2.2vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 800 }}
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[30] right-[0]  md:top-[14.3vw] md:right-[-10.2vw]"
        >
          <Image
            src={TopBird.src}
            alt="Top Bird Four"
            width={43}
            height={14}
            className=" w-[40px] md:w-[2.2vw]"
          />
        </motion.div>
        <Image
          src={TopBird.src}
          alt="Top Bird Four"
          width={43}
          height={14}
          className="absolute top-[30] right-[0]  md:top-[14.3vw] md:right-[-10.2vw] w-[40px] md:w-[2.2vw]"
        />

        {/* Top Birds */}
        <div className="element-shadow flex bg-white rounded-[200px] px-[8px] py-[4px] md:px-[0.4vw] md:py-[0.2vw] gap-[0.5vw]">
          <Image
            src={MessageIcon.src}
            alt="Message Icon"
            className="w-[24px] md:w-[1.6vw]"
            width={32}
            height={17}
          />
          <div className="text-[12px] md:text-[0.8vw] font-medium text-[var(--primary)] leading-[1.2]">
            #1 iMessage Automation Tool
          </div>
        </div>
        <div className="text-[40px] md:text-[3.2vw] font-[700] text-center leading-[1.2]">
          <span className="text-[var(--primary)]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </div>
        <div className="text-[12px] md:text-[0.9vw] font-[400] text-center leading-[1.2]">
          Coup lets you, your team, or AI workflows send iMessages directly from
          <br />
          your phone number, running securely on your Mac or Mac Mini.
        </div>
        <div className="flex items-center justify-center gap-[0.5vw] text-[12px] md:text-[0.9vw] font-medium mt-[12px] md:mt-[1.2vw]">
          <button className="bg-[var(--primary)] text-white h-[32px] md:h-[2.3vw] px-[12px] md:px-[1vw] flex items-center justify-center rounded-[100px] cursor-pointer">
            Get Started
          </button>
          <button className="text-black border border-[0.5px] border-[#6D778F] h-[32px] md:h-[2.3vw] px-[12px] md:px-[1vw] flex items-center justify-center rounded-[100px] cursor-pointer gap-[6px] md:gap-[0.6vw]">
            <Image
              src={AppleIcon.src}
              alt="Apple Icon"
              className="w-[16px] md:w-[1vw] translate-y-[-1px]"
              width={19}
              height={22}
            />
            <div className="w-[0.5px] h-[16px] md:h-[1.6px] bg-[#6D778F]" />
            <div>Download the Mac app</div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
