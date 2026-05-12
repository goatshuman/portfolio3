import { motion } from "framer-motion";
  import { useEffect, useState } from "react";

  import useParallax from "../reactbits/hooks/useParallax";
  import { styles } from "../styles";
  import useMediaQuery from "../utils/useMediaQuery";
  import { anshuman } from "../assets";

  const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const typedItems = ["Developer", "Freelancer", "Designer", "Learner"];
    const [itemIndex, setItemIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const isMobile = useMediaQuery("(max-width: 768px)");
    const { style: parallaxStyle } = useParallax({
      strength: 0.03,
      maxOffset: 15,
      enabled: !isMobile,
    });

    useEffect(() => {
      const typeItem = () => {
        if (charIndex < typedItems[itemIndex].length) {
          setTypedText((prevText) => prevText + typedItems[itemIndex][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => {
            setItemIndex((itemIndex + 1) % typedItems.length);
            setCharIndex(0);
            setTypedText("");
          }, 1000);
        }
      };
      const typingInterval = setInterval(typeItem, 100);
      return () => clearInterval(typingInterval);
    }, [charIndex, itemIndex]);

    return (
      <section className="relative w-full h-screen mx-auto overflow-hidden" id="hero">
        <div
          className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-8`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div style={parallaxStyle} className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Anshuman</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm{" "}
              <span
                className="typed"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(245, 202, 153, 0.5), rgba(245, 202, 153, 0.5))",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 8px",
                  backgroundPosition: "0 100%",
                  color: "#915EFF",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                {typedText}
              </span>
              <span className="typed-cursor" aria-hidden="true">|</span>
              <br />
              <b>Bring on the challenges, I'm ready to soak up knowledge!</b>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden sm:flex flex-shrink-0"
            style={parallaxStyle}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #915EFF",
                boxShadow: "0 0 40px rgba(145,94,255,0.4), 0 0 80px rgba(145,94,255,0.15)",
              }}
            >
              <img
                src={anshuman}
                alt="Anshuman"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    );
  };

  export default Hero;
  