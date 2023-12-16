import Image from "next/image";
import React from "react";

import AboutMosaic from "../../public/aboutmosaic.png";
import { TbTargetArrow } from "react-icons/tb";

const AboutSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl xl:max-w-[1380px] flex-col items-center justify-center py-5 lg:flex-row lg:py-16">
      <div className="flex w-full min-w-[50%] flex-col items-center justify-center gap-6 p-5">
        <div className="text-center">
          <span className="text-xl font-light text-powerblue-light">SOBRE</span>
          <h2 className="text-3xl font-bold xl:text-4xl uppercase">
            Descubra o que torna a POWERVET tão incrível!
          </h2>
        </div>
        <p className="text-sm font-light md:text-base xl:text-lg text-center">
          Bem-vindo à POWERVET, onde paixão pelos animais se une à excelência
          veterinária. Desde nossa fundação, temos sido dedicados a proporcionar
          cuidados excepcionais para os animais de estimação que fazem parte da
          sua família. Aqui na POWERVET, entendemos que cada animal é único, e é
          com esse entendimento que moldamos nossa abordagem de cuidados
          veterinários.
        </p>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-powerblue-dark p-5 xl:p-8 text-center">
          <span className="flex items-center justify-center gap-4 text-2xl xl:text-4xl font-bold text-powerblue-light">
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
        src={AboutMosaic}
        alt="Mosaico de imagens da POWERVET"
        sizes="100vw"
        width={0}
        height={0}
        className="aspect-square h-auto w-full min-w-[50%] p-5"
      />
    </section>
  );
};

export default AboutSection;
