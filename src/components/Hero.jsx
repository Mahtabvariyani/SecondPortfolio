import { styles } from "../styles";
import Lottie from "lottie-react";
import hero from "../heroAnim/hero.json";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>

        <div className="hidden sm:flex lg:flex-col xs:flex-col md:flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff7dff] ">Mah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Junior Web-Developer
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <a href="#about">
          <div className=" absloute xl:w-full w-[100%] xl:h-full h-[590px] z-0">
            <Lottie animationData={hero} loop={true} />
          </div>
        </a>
        <div className="xs:flex-col lg:hidden md:hidden  pr-10">
          <h1 className={`${styles.heroHeadTextSecond} text-white `}>
            Hi, I'm <span className="text-[#ff7dff]">Mah</span>
          </h1>
          <p className={`${styles.heroSubTextSecond} mt-2 text-white-100`}>
            A Junior Web-Developer
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
