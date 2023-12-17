import { Button, Divider } from "@nextui-org/react";
import { TbShieldCheck } from "react-icons/tb";

const plansBasic: { title: string; text: string }[] = [
  {
    title: "Consultas de Rotina Ilimitadas",
    text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
  },
  {
    title: "Vacinação Completa",
    text: "Todas as vacinas essenciais estão incluídas, protegendo seu pet contra doenças todas as doenças mais comuns.",
  },
  {
    title: "Descontos em Cirúrgias",
    text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
  },
];

const plansPro: { title: string; text: string }[] = [
  {
    title: "Exames Laboratoriais Ilimitados",
    text: "Todos os exames necessários para um diagnóstico preciso estão incluídos, sem custos adicionais.",
  },
  {
    title: "Nutrição Personalizada",
    text: "Receba orientação de especialistas para criar uma dieta personalizada para as necessidades específicas do seu pet.",
  },
  {
    title: "Atendimento Domiciliar Mensal",
    text: "Oferecemos a opção de um atendimento domiciliar, proporcionando comodidade para você e conforto para seu pet.",
  },
];

const PlansSection = () => {
  return (
    <section className="3xl:max-w-[1580px] 3xl:rounded-2xl relative  mx-auto flex w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/plansbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-5 text-center text-white xl:max-w-[1380px]">
        <h4 className="flex items-center justify-center gap-5 text-xl font-bold uppercase lg:text-2xl">
          Invista na saúde e felicidade do seu companheiro
        </h4>
        <p className="text-sm font-light md:text-base xl:text-lg">
          Planos de assinatura que proporcionam uma abordagem abrangente para
          garantir que seu companheiro peludo receba cuidados essenciais.
        </p>

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <span className="w-1/2 rounded-t-2xl bg-powerblue-light p-2 font-bold">
              Power BASIC
            </span>

            <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
              {plansBasic.map((basic, index) => (
                <div key={index}>
                  <h4 className="font-bold">{basic.title}</h4>
                  <p className="text-sm font-light">{basic.text}</p>
                  <Divider className="mt-3" />
                </div>
              ))}
              <span className="w-full text-3xl font-bold">
                R$59,99/mês
              </span>
            </div>

            <Button
              className="h-14 w-full text-base font-medium text-white uppercase mt-5"
              color="primary"
              endContent={<TbShieldCheck size={30} className="ml-2"/>}
            >
              Obter Vantagens
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="w-1/2 rounded-t-2xl bg-powerblue-light p-2 font-bold">
              Power PRO
            </span>

            <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
              {plansPro.map((pro, index) => (
                <div key={index}>
                  <h4 className="font-bold">{pro.title}</h4>
                  <p className="text-sm font-light">{pro.text}</p>
                  <Divider className="mt-3" />
                </div>
              ))}
              <span className="w-full text-3xl font-bold">
              R$99,99/mês
              </span>
            </div>

            <Button
              className="h-14 w-full text-base font-medium text-white uppercase mt-5"
              color="primary"
              endContent={<TbShieldCheck size={30} className="ml-2"/>}
            >
              Obter Vantagens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
