import Image from "next/image";
import heroBanner from "../../public/herobanner.png";
import { Button } from "@nextui-org/react";

import { IoCalendarOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="relative flex w-full 3xl:max-w-[1580px] mx-auto items-center justify-center bg-powerblue-dark bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat py-10 3xl:rounded-b-2xl">
      <div className="flex items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center lg:text-start text-white 2xl:w-6/12">
            <h1 className="text-3xl font-bold md:text-5xl 2xl:text-6xl">
              A MELHOR ESCOLHA PARA O SEU PET
            </h1>
            <p className="text-sm font-extralight md:text-lg">
              Na POWERVET, dedicamos nosso cuidado e expertise para garantir a
              saúde e alegria contínuas do seu companheiro de quatro patas.
              Oferecemos serviços veterinários excepcionais para manter seu pet
              sempre saudável e feliz.
            </p>
            <Button
              className="h-14 w-full text-base font-medium text-white"
              color="primary"
              endContent={<IoCalendarOutline size={30} className="ml-2"/>}
            >
              Agendar Consulta
            </Button>
          </div>

          <Image
            src={heroBanner}
            alt="heroBanner"
            className="aspect-auto h-auto w-full pl-10 lg:pl-0 2xl:w-6/12"
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
