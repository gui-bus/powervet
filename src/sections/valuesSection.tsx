"use client";
import Image from "next/image";
import values01 from "../../public/values01.png";
import values02 from "../../public/values02.png";

import { BsFillPatchCheckFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const values: { title: string; text: string }[] = [
  {
    title: "Compromisso com a Excelência",
    text: "Buscamos a excelência em todos os aspectos dos nossos serviços, desde consultas de rotina até procedimentos cirúrgicos complexos. Nosso compromisso é fornecer o mais alto padrão de cuidado veterinário.",
  },
  {
    title: "Empatia e Carinho",
    text: "Compreendemos a importância do vínculo entre você e seu animal de estimação. Nosso pessoal é escolhido não apenas por sua experiência profissional, mas também por sua empatia e carinho pelos animais.",
  },
  {
    title: "Transparência e Comunicação",
    text: "Valorizamos a comunicação aberta e transparente. Queremos que você esteja totalmente informado sobre as opções de tratamento para seu animal de estimação, permitindo que tome decisões informadas.",
  },
];

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/valuesbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/valuesbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <h2
          className="flex items-center justify-center gap-5 text-2xl md:text-3xl font-bold text-white "
          id="Values"
        >
          NOSSOS VALORES <BsFillPatchCheckFill size={50} />
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
            <div
              className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-center gap-5 md:flex-col lg:max-w-md lg:pl-8"
              ref={refQuote}
            >
              <Image
                src={values01}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center">
              {values.map((value, index) => (
                <div key={index} className="w-full max-w-3xl">
                  <p className="mx-auto w-[80%] rounded-t-2xl bg-powerblue-light p-2 font-bold text-white md:w-[60%]">
                    {value.title}
                  </p>
                  <p className="rounded-2xl bg-white p-5 text-sm font-light text-black md:text-base xl:text-lg">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
