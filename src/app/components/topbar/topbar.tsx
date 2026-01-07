"use client";
import { CoupIcon } from "@/app/icons";
import Image from "next/image";
import { motion } from "motion/react";

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex items-center justify-center pt-[30px] pb-0 bg-full "
    >
      <div className="element-shadow w-[95vw] md:w-[62.5vw] bg-white rounded-[200px] py-[12px] md:py-[0.9vw] px-[12px] md:px-[1.2vw] flex items-center justify-between">
        <Image
          src={CoupIcon.src}
          alt="Coup Icon"
          className="w-[70px] md:w-[5.5vw]"
          width={107}
          height={34}
        />
        <nav>
          <ul className="flex items-center gap-[0.7vw] text-[12px] md:text-[0.8vw] font-medium">
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
        <button className="element-shadow-hover relative overflow-hidden bg-[var(--primary)] text-white text-[12px] md:text-[0.8vw] font-medium px-[12px] md:px-[0.9vw] py-[6px] md:py-[0.5vw] flex items-center justify-center rounded-[100px] cursor-pointer transition-colors duration-300 group">
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-[180%] bg-white rounded-full transition-all duration-400 ease-in group-hover:w-[200%] group-hover:right-[-50%] z-0"
            aria-hidden="true"
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--primary)]">
            Contact Sales
          </span>
        </button>
      </div>
    </motion.div>
  );
}
