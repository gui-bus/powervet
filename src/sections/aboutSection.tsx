"use client";
import Image from "next/image";
import React from "react";

import AboutMosaic from "../../public/aboutmosaic.png";
import { TbTargetArrow } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="About"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full min-w-[50%] flex-col items-center justify-center gap-6 p-5">
          <div className="text-center">
            <span className="text-xl font-light text-powerblue-light">
              SOBRE
            </span>
            <h2 className="text-3xl font-bold xl:text-4xl">
              Descubra o que torna a POWERVET tão incrível!
            </h2>
          </div>
          <p className="text-center text-sm font-light md:text-base xl:text-lg">
            Bem-vindo à POWERVET, onde paixão pelos animais se une à excelência
            veterinária. Desde nossa fundação, temos sido dedicados a
            proporcionar cuidados excepcionais para os animais de estimação que
            fazem parte da sua família. Aqui na POWERVET, entendemos que cada
            animal é único, e é com esse entendimento que moldamos nossa
            abordagem de cuidados veterinários.
          </p>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-powerblue-dark p-5 text-center xl:p-8">
            <span className="flex items-center justify-center gap-4 text-2xl font-bold text-powerblue-light xl:text-4xl">
              <TbTargetArrow size={50} /> NOSSA MISSÃO
            </span>
            <p className="mt-5 text-sm font-extralight text-white md:text-base">
              Na POWERVET, nossa missão é promover a saúde e o bem-estar dos
              animais de estimação, oferecendo serviços veterinários de alta
              qualidade. Acreditamos que cada pet merece uma vida saudável e
              feliz, e estamos comprometidos em fornecer cuidados de elite.
            </p>
          </div>
        </div>

        <Image
          ref={refQuote}
          src={AboutMosaic}
          alt="Mosaico de imagens da POWERVET"
          sizes="100vw"
          width={0}
          height={0}
          className="aspect-square h-auto w-full min-w-[50%] p-5"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
