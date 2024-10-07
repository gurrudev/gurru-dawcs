import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import {
    MoveUpRightIcon,
    TerminalSquareIcon,
    SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
            <Link
                href="https://github.com/gurrudev"
                target="_blank"
                className="mb-5 sm:text-lg flex items-center text-gray-500 gap-2 border border-gray-500 py-0.5 px-8 rounded-2xl"
            >
                Follow along on GitHub{" "}
                <SquareArrowOutUpRight className="w-4 h-4 font-extrabold" />
            </Link>
            <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
                {"Utility Tools"} & {"Docs for Developers 🚀"}
            </h1>
            <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
                {
                    "Whether you're working on a small project or a large-scale application, these libraries aims to simplify operations with clean, efficient, and well-tested utility functions."
                }
            </p>
            <div className="flex flex-row items-center gap-5">
                <Link
                    href={`/docs${page_routes[0].href}`}
                    className={buttonVariants({
                        className: "px-6",
                        size: "lg",
                    })}
                >
                    Get Stared
                </Link>
                {/* <Link
                  href="/blog"
                  className={buttonVariants({
                      variant: "secondary",
                      className: "px-6",
                      size: "lg",
                  })}
              >
                  Read Blog
              </Link> */}
            </div>
            <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code text-base font-medium">
                <TerminalSquareIcon className="w-5 h-5 mr-1 mt-0.5" />
                {"npm i string-utility-ts"} <span className="text-blue-500 text-[10px] font-bold font-sans">✨New</span>
            </span>
        </div>
    );
}
