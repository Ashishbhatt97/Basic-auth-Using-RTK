// import { GridPattern } from "@/components/ui/grid-pattern";
// import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <div className="text-white h-screen w-full flex items-start justify-center">
        {/* <GridPattern
          width={70}
          height={70}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        /> */}
        <div className="flex flex-col items-center pt-32 justify-center py-6 max-w-5xl ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "anticipate",
            }}
            className="w-fit h-[28px] rounded-full flex items-center justify-center px-5
        border border-[#211212]/90
      bg-[#121212]/80 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 backdrop-saturate-500 backdrop-contrast-500 bg-blend-overlay
      "
          >
            <motion.h3 className="text-sm text-[#a9a9a9] text-center flex items-center justify-center gap-2">
              ✨ Welcome to the world of motion
            </motion.h3>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-[100px] font-jakarta pointer-events-none text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#ffffff] via-[#a8a7a7] to-[#ffffff]"
          >
            MOTION IS THE BEST TO ANIMATE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="text-lg text-center px-28 font-medium pointer-events-none text-[#a9a9a9]"
          >
            Experience the future of web design with stunning animations,
            seamless interactions, and a user-friendly experience.
          </motion.p>
          <div className="flex items-center relative justify-center mt-4 h-20 gap-16">
            <div className="flex items-center relative justify-center h-12 w-full">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="bg-[#f2f2f2] blur-md absolute px-4 py-2 h-full min-w-[200px] rounded-full text-black font-semibold"
              />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="bg-[#171717] z-10 px-4 py-2 rounded-full h-full min-w-[210px] flex items-center justify-center gap-2 transition-all group  text-white font-semibold"
                aria-label="Get Started for Free"
              >
                Get Started for free{" "}
                <ArrowRight
                  className="group-hover:translate-x-[3px] transition-all"
                  size={18}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
