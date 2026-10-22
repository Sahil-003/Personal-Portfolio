import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 w-full max-w-xl pl-4 absolute left-4 bottom-24 text-left md:relative md:left-0 md:bottom-auto md:mt-40 md:self-auto md:mb-0 md:pl-0 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          style={{ WebkitTextStroke: '1px black' }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Sahil
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            style={{ WebkitTextStroke: '1px black' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            AI Enthusiast<br /> Turning Data into Imapact  <br />
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl [-webkit-text-stroke:1px_black]"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            style={{ WebkitTextStroke: '1px black' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            ML & AI Systems
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-start space-y-4 md:hidden">
        <motion.p
          className="text-2xl md:text-4xl font-medium"
          style={{ WebkitTextStroke: '1px black' }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Sahil
        </motion.p>
        <div>
          <motion.p
            className="text-3xl md:text-4xl font-black text-neutral-300"
            style={{ WebkitTextStroke: '1px black' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            AI-enthusiast
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl md:text-8xl [-webkit-text-stroke:1px_black]"
            />
          </motion.div>
          <motion.p
            className="text-2xl md:text-4xl font-black text-neutral300"
            style={{ WebkitTextStroke: '1px black' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Artificial Intelligence
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
