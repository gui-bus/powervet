"use client";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { title: string; href: string }[] = [
    {
      title: "Sobre",
      href: "#About",
    },
    {
      title: "Valores",
      href: "#Values",
    },
    {
      title: "Serviços",
      href: "#Services",
    },
    {
      title: "Planos",
      href: "#Plans",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-powerblue-light py-2"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link href="#Home">
          <NavbarBrand>
            <Image
              src={Logo}
              alt="POWERVET"
              sizes="100vw"
              height={0}
              width={0}
              className="h-auto w-52 object-cover"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarItem>
          <Link
            className="text-white transition-all duration-300 hover:font-bold"
            href="#About"
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white transition-all duration-300 hover:font-bold"
            href="#Values"
          >
            Valores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white transition-all duration-300 hover:font-bold"
            href="#Services"
          >
            Serviços
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white transition-all duration-300 hover:font-bold"
            href="#Plans"
          >
            Planos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              isIconOnly
              target="_blank"
              startContent={
                <FaFacebookF
                  size={40}
                  className="rounded-full border-2 p-2 text-white"
                />
              }
            />
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              isIconOnly
              target="_blank"
              startContent={
                <FaInstagram
                  size={40}
                  className="rounded-full border-2 p-2 text-white"
                />
              }
            />
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              isIconOnly
              target="_blank"
              startContent={
                <FaWhatsapp
                  size={40}
                  className="rounded-full border-2 p-2 text-white"
                />
              }
            />
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarMenu className="pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
