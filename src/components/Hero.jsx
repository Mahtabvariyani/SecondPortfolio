import { styles } from "../styles";
import Lottie from "lottie-react";
import hero from "../heroAnim/hero.json";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mb-10`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/*         
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff7dff]">Mah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Junior Web-Developer
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center ml-10">
        <Lottie animationData={hero} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
