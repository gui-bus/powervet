import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POWERVET - Sua clínica veterinária de confiança para cuidados excepcionais!",
  description: "Na Powervet, dedicamo-nos apaixonadamente ao bem-estar e saúde do seu pet. Nossa clínica veterinária oferece uma experiência completa, desde consultas de rotina até intervenções cirúrgicas avançadas, proporcionando cuidados excepcionais e personalizados para cada animal de estimação. Contamos com uma equipe qualificada de veterinários dedicados, equipados para lidar com uma ampla variedade de serviços veterinários, incluindo consultas especializadas, cirurgias, exames laboratoriais, cuidados preventivos e emergências 24 horas. No nosso compromisso com o amor aos animais, oferecemos serviços de fisioterapia, odontologia veterinária, nutrição especializada e cuidados com animais exóticos. A Powervet é mais que uma clínica; é um espaço moderno com instalações de última geração, garantindo um ambiente seguro e confortável. Além disso, fornecemos produtos premium em nosso petshop, serviços de banho e tosa, rações especializadas e cuidados especiais para garantir a qualidade de vida e felicidade do seu pet. Descubra a diferença na Powervet - sua escolha confiável para a saúde e felicidade do seu animal de estimação.",
  keywords: "clínica veterinária, cuidados com animais, veterinário, saúde animal, consultas veterinárias, cirurgia veterinária, exames veterinários, cuidados preventivos, animais de estimação, medicina veterinária, emergência veterinária, tratamento de animais, serviços veterinários, check-up animal, vacinação de animais, odontologia veterinária, medicamentos veterinários, especialidades veterinárias, animais domésticos, qualidade de vida animal, bem-estar animal, fisioterapia animal, nutrição veterinária, cuidados com cães, cuidados com gatos, exames laboratoriais, hospital veterinário, atendimento personalizado, equipe qualificada, urgência veterinária, tecnologia veterinária, instalações modernas, clínica de animais exóticos, esterilização de animais, animais silvestres, emergência 24 horas, internação veterinária, petshop, banho e tosa, rações premium, produtos pet, cuidados especiais, amor aos animais, Powervet, veterinários dedicados.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
