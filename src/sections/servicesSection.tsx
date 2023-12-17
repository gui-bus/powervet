import { Button } from "@nextui-org/react";
import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const services: { title: string; text: string }[] = [
  {
    title: "CHECK-UPS REGULARES",
    text: "Nossas consultas de rotina são projetadas para manter seu pet saudável em todas as fases da vida. Com exames abrangentes e aconselhamento especializado, estamos comprometidos em proporcionar uma vida longa e feliz ao seu animal de estimação.",
  },
  {
    title: "VACINAÇÃO COMPLETA",
    text: "Oferecemos um programa de vacinação personalizado, adaptado às necessidades individuais do seu pet. Mantenha seu animal protegido contra doenças com nossas opções de imunização abrangentes, garantindo uma vida saudável.",
  },
  {
    title: "INTERVENÇÕES CIRÚRGICAS",
    text: "Nossa equipe experiente realiza cirurgias e procedimentos médicos com o mais alto padrão de cuidado. Desde o  diagnóstico à recuperação, garantimos uma experiência tranquila para você e seu pet, focando sempre  na saúde e no conforto do seu pet.",
  },
  {
    title: "UM SORRISO SAUDÁVEL",
    text: "A saúde bucal é crucial para o bem-estar geral do seu animal. Oferecemos serviços de odontologia veterinária, incluindo limpeza, extrações e orientações de cuidados em casa, para garantir um sorriso saudável e duradouro.",
  },
  {
    title: "ALIMENTAÇÃO PERSONALIZADA",
    text: "Desenvolvemos planos nutricionais personalizados para atender às necessidades específicas do seu pet. Desde dietas especiais até aconselhamento sobre alimentação saudável, ajudamos a garantir uma nutrição ideal para uma vida vibrante.",
  },
  {
    title: "SOCORRO IMEDIATO",
    text: "Estamos disponíveis 24 horas por dia, 7 dias por semana, para lidar com emergências veterinárias. Quando seu pet precisa de cuidados urgentes, nossa equipe dedicada está pronta para fornecer assistência imediata e compassiva.",
  },
];

const ServicesSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]">
      <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start gap-6 p-5">
        <div className="text-center md:text-start">
          <span className="text-xl font-light text-powerblue-light">
            SERVIÇOS
          </span>
          <h2 className="text-3xl font-bold xl:text-4xl">
            Serviços de primeira qualidade para seu pet!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              className="flex flex-col items-start justify-start text-white bg-powerblue-dark p-5 rounded-bl-2xl rounded-tr-2xl"
              key={index}
            >
              <h4 className="font-bold mb-2">{service.title}</h4>
              <p className="text-sm font-light">{service.text}</p>
            </div>
          ))}
        </div>

        <Button
          className="h-14 w-full text-base font-medium text-white"
          color="primary"
          endContent={<IoCalendarOutline size={30} className="ml-2" />}
        >
          Agendar Consulta
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
