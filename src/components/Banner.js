import React from "react";
// images
import Image from "../assets/imgmy.jpg";
// icons
import { FaGithub, FaYoutube, FaDribbble, FaTelegram } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn, fadein } from "../variants";

import Resume from "../assets/resume.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* { text } */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-blod leading-[0.8] lg:text-[90px]"
            >
              Azizbek <span>Muxtorqulov</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:tetx-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Highly skilled and experienced Frontend Developer with over 1
              years of experience designing and implementing user-friendly and
              responsive web applications. Strong proficiency in HTML, CSS,
              JavaScript, and various frontend frameworks React .
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a href="https://t.me/abdulloh981177">Contact me</a>
              </button>
              <a download href={Resume} className="text-gradient btn-link">
                {" "}
                My Resume
              </a>
            </motion.div>
            {/* { sosials } */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/channel/UCCswZP_IZUtCSwYZYoYJRxA">
                <FaYoutube />
              </a>
              <a href="https://github.com/AbdulAziz111198">
                <FaGithub />
              </a>
              <a href="https://t.me/abdulloh981177">
                <FaDribbble />
              </a>
              <a href="https://t.me/abdulloh981177">
                <FaTelegram />
              </a>
            </motion.div>
          </div>
          {/* { images } */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[220px] lg:max-w-[382px] mx-auto mix-blend-lighten "
          >
            <img src={Image} alt="" style={{ borderRadius: "15px" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
