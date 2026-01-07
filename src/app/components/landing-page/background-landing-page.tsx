"use client";
import {
  BottomBirdFour,
  BottomBirdOne,
  BottomBirdThree,
  BottomBirdTwo,
  CloudsBackground,
  OutOfScreenBirdLeft,
  OutOfScreenBirdRight,
  ScrollDownIcon,
} from "@/app/icons";
import Image from "next/image";
import { motion } from "motion/react";

export default function BackgroundLandingPage() {
  return (
    <div className="w-full mt-[3vw]">
      <div className="w-full realtive flex items-center justify-center">
        <motion.div
          initial={{ x: -100, y: -150 }}
          animate={{ x: "100vw", y: "-450px" }}
          transition={{ duration: 3, ease: "easeIn", delay: 3 }}
          className="absolute left-0 "
        >
          <Image
            src={OutOfScreenBirdLeft.src}
            alt="OutOfScreenBirdLeft"
            width={104}
            height={77}
            className="w-[72px] md:w-[5.3vw]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, y: -100 }}
          animate={{ x: "-100vw", y: "-350px" }}
          transition={{ duration: 3, ease: "easeIn", delay: 3 }}
          className="absolute right-0"
        >
          <Image
            src={OutOfScreenBirdRight.src}
            alt="OutOfScreenBirdRight"
            width={104}
            height={77}
            className="w-[72px] md:w-[5.3vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="absolute md:translate-x-[-28vw] translate-x-[-35vw] md:translate-y-[4vw] translate-y-[15vw]"
        >
          <Image
            src={BottomBirdOne.src}
            alt="Bottom Bird One"
            width={104}
            height={77}
            className="w-[52px] md:w-[5.3vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          className="absolute md:translate-x-[-13vw] translate-x-[-17vw] translate-y-[1vw] "
        >
          <Image
            src={BottomBirdTwo.src}
            alt="Bottom Bird Two"
            width={88}
            height={57}
            className="w-[44px] md:w-[4.5vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="absolute translate-x-[19vw] translate-y-[5vw]  "
        >
          <Image
            src={BottomBirdThree.src}
            alt="Bottom Bird Three"
            width={88}
            height={57}
            className="w-[64px] md:w-[6.5vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          className="absolute translate-x-[35.5vw] md:translate-y-[2.4vw] translate-y-[25vw]"
        >
          <Image
            src={BottomBirdFour.src}
            alt="Bottom Bird Four"
            width={88}
            height={57}
            className="w-[64px] md:w-[6.5vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={CloudsBackground.src}
            alt="Clouds Background"
            className="md:w-full h-[320px] md:h-unset"
            width={1440}
            height={320}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col items-center justify-center absolute gap-[0.3vw] bottom-[4vw] left-0 w-full"
      >
        <div className="md:text-[0.9vw] text-[12px] font-[500] text-[#1E2025]">
          Scroll to learn more
        </div>
        <Image
          src={ScrollDownIcon.src}
          alt="Scroll Down Icon"
          width={32}
          height={32}
          className="w-[16px] md:w-[1.5vw]"
        />
      </motion.div>
    </div>
  );
}
