import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import Resume  from "../assets/resume.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* {img } */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top  "
          ></motion.div> */}
          {/* {text } */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent"> About me </h2>
            <h3 className="h3 mb-4">
              I'm a Frilans and Mentor Front-end Developer with over 1 years of
              experiance
            </h3>
            <p className="mb-6">
              Passionate about creating visually appealing and engaging websites
              and applications that provide an exceptional user experience.
            </p>
            {/* {stats } */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Complated
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experiance
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a
                  href="https://t.me/abdulloh981177"
                  className="text-gradient btn-link"
                >
                  Contact me
                </a>
              </button>
              <a download href={Resume} className="text-gradient btn-link">
                My CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
