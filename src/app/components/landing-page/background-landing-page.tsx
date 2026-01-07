import {
  BottomBirdFour,
  BottomBirdOne,
  BottomBirdThree,
  BottomBirdTwo,
  CloudsBackground,
  ScrollDownIcon,
} from "@/app/icons";
import Image from "next/image";

export default function BackgroundLandingPage() {
  return (
    <div className="w-full mt-[3vw]">
      <div className="w-full realtive flex items-center justify-center">
        <Image
          src={BottomBirdOne.src}
          alt="Bottom Bird One"
          width={104}
          height={77}
          className="absolute translate-x-[-28vw] translate-y-[4vw] w-[5.3vw]"
        />
        <Image
          src={BottomBirdTwo.src}
          alt="Bottom Bird Two"
          width={88}
          height={57}
          className="absolute translate-x-[-13vw] translate-y-[1vw] w-[4.5vw]"
        />
        <Image
          src={BottomBirdThree.src}
          alt="Bottom Bird Three"
          width={88}
          height={57}
          className="absolute translate-x-[19vw] translate-y-[5vw] w-[6.5vw]"
        />
        <Image
          src={BottomBirdFour.src}
          alt="Bottom Bird Four"
          width={88}
          height={57}
          className="absolute translate-x-[35.5vw] translate-y-[2.4vw] w-[6.5vw]"
        />
        <Image
          src={CloudsBackground.src}
          alt="Clouds Background"
          className="w-full"
          width={1440}
          height={320}
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute gap-[0.3vw] bottom-[4vw] left-0 w-full">
        <div className="text-[0.9vw] font-[500] text-[#1E2025]">
          Scroll to learn more
        </div>
        <Image
          src={ScrollDownIcon.src}
          alt="Scroll Down Icon"
          width={32}
          height={32}
          className="w-[1.5vw]"
        />
      </div>
    </div>
  );
}
