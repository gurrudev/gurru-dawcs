// for page navigation & to sort on leftbar
export type EachRoute = {
    title: string;
    href: string;
    noLink?: true;
    items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
    {
        title: "String Utility TS",
        href: "/string-utility-ts",
        noLink: true,
        items: [
            { title: "Introduction", href: "/introduction" },
            { title: "Installation", href: "/installation" },
            { title: "Quick Start Guide", href: "/quick-start-guide" },
            { title: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Utilities",
        href: "/utilities",
        noLink: true,
        items: [
            {
                title: "Date Formats",
                href: "/date-formats",
                items: [
                    { title: "Examples", href: "/custom-dates" },
                ],
            },
            { title: "String Utilities", href: "/string-utilities" },
            { title: "Array Utilities", href: "/array-utilities" },
            { title: "Object Utilities", href: "/object-utilities" },
            { title: "Number Utilities", href: "/number-utilities" },
            { title: "URL Utilities", href: "/url-utilities" },
            { title: "Validation", href: "/validation" },
            { title: "Regex Patterns", href: "/regex-patterns" },
            { title: "Color Utilities", href: "/color-utilities" },
            { title: "Browser & Timing", href: "/browser-utilities" },
            { title: "TypeScript Snippets", href: "/typescript-snippets" },
            { title: "Promise & Async", href: "/promise-async" },
            { title: "Relative Time", href: "/relative-time" },
            { title: "Function Utilities", href: "/function-utilities" },
            { title: "Math Utilities", href: "/math-utilities" },
            { title: "File Utilities", href: "/file-utilities" },
            { title: "Keyboard & Events", href: "/keyboard-events" },
        ],
    },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
    const ans: Page[] = [];
    if (!node.noLink) {
        ans.push({ title: node.title, href: node.href });
    }
    node.items?.forEach((subNode) => {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` };
        ans.push(...getRecurrsiveAllLinks(temp));
    });
    return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
