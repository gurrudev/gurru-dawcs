import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon, CommandIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import logoG from '../public/g.png' 
import Image from 'next/image'

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "https://ashutoshpawar.live",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/gurrudev"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://x.com/gurrudevs"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
      <Link href="/" className="flex items-center gap-2.5">
          {/* <CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} /> */}
          <Image src={logoG} alt="gDocs" width={35} height={35} />
          <h2 className="text-md font-extrabold font-code">GurruDawcs</h2>
      </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
            <Anchor
                key={item.title + item.href}
                activeClassName="!text-primary md:font-semibold font-medium"
                absolute
                className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
            {...(item.href.startsWith("http") && { target: "_blank" })}
            >
                {item.title}{" "}
            {item.title === 'Contact' ? <SquareArrowOutUpRight className="w-3 h-3 font-extrabold" /> : null}
            </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp} 
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
