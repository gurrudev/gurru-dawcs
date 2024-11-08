import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon, TriangleIcon } from "lucide-react";
import logoG from '../public/g.png'
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <Image src={logoG} alt="logo" width={30} height={30} />
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 text-orange-300"
              href="https://ashutoshpawar.live"
            >
              ASHUTOSH
            </Link>
            . &copy; 2024 GurruDawcs.
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      
    </>
  );
}
