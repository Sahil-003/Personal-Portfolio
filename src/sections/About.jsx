import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const advancedPythonStyle = isMobile
    ? { rotate: "30deg", top: "12%", left: "12%" }
    : { rotate: "75deg", top: "30%", left: "20%" };
  const mlStyle = isMobile
    ? { rotate: "-15deg", top: "55%", left: "32%" }
    : { rotate: "-30deg", top: "60%", left: "45%" };
  const cppStyle = isMobile
    ? { rotate: "70deg", top: "55%", left: "68%" }
    : { rotate: "90deg", bottom: "30%", left: "70%" };
  const webStyle = isMobile
    ? { rotate: "-40deg", top: "68%", left: "5%" }
    : { rotate: "-45deg", top: "55%", left: "0%" };
  const aiStyle = isMobile
    ? { rotate: "15deg", top: "8%", left: "36%" }
    : { rotate: "20deg", top: "10%", left: "38%" };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="coding pov"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Sahil Sorout</p>
            <p className="subtext">
              I am a passionate Computer Science Engineering professional specializing in Machine Learning, Artificial Intelligence, and Web Development. I thrive in dynamic environments and focus on delivering accuracy, quality, and impactful results.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 font-bold text-center">
              DRIVEN BY DATA
            </p>
            <Card
              style={advancedPythonStyle}
              text="Advanced Python"
              containerRef={grid2Container}
            />
            <Card
              style={mlStyle}
              text="Web Development"
              containerRef={grid2Container}
            />
            <Card
              style={cppStyle}
              text="AI Research"
              containerRef={grid2Container}
            />
            <Card
              style={webStyle}
              text="Machine Learning"
              containerRef={grid2Container}
            />
            <Card
              style={aiStyle}
              text="C / C++"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location & Availability</p>
            <p className="subtext">
              I'm based in Berlin, Germany, and open to work and exciting opportunities worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to collaborate on a project?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">I specialize in Python and C++, with a strong foundation in problem-solving and system design.
              From data handling and preprocessing to training machine learning models. I work on building practical solutions. I also explore web development to create complete, functional applications.
              I aim to develop solutions that are reliable, impactful, and easy to use.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;