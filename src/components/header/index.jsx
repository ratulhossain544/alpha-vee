import React from "react";
import Container from "../container";
import Logo from "../logo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { DesktopMenu } from "./desktop-menu";
import MobileMenu from "./mobile-menu";

const Header = () => {
  return (
    <header className="backdrop-blur-sm h-[90px] fixed inset-x-0 bg-neutral-900/20">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <DesktopMenu />
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className={buttonVariants()}>
            Let&apos;s Talk
          </Link>
          <MobileMenu/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
