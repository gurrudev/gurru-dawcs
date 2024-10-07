import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center px-4 lg:px-20 xl:px-60 mt-3 mb-5">
            <h1 className="text-3xl lg:text-4xl font-extrabold mt-10 text-center">
                About GurruDawcs
            </h1>
            <div>
                <p className="text-base lg:text-lg leading-relaxed mt-8 text-justify max-w-4xl">
                    Welcome to <strong>GurruDawcs</strong>,{" "}
                    {`your go-to resource for
                documentation on custom libraries and essential utility tools
                tailored for developers. Whether you're working on complex
                projects or just tackling everyday development challenges,
                GurruDawcs aims to simplify your workflow by providing clear,
                concise, and actionable documentation.`}
                </p>

                <h2 className="text-2xl lg:text-2xl font-bold mt-10">
                    What is GurruDawcs?
                </h2>
                <p className="text-base lg:text-lg leading-relaxed mt-4 text-justify max-w-4xl">
                    GurruDawcs is a platform designed to host comprehensive
                    documentation for various utility tools and libraries
                    created with developers in mind. From string manipulation
                    utilities to advanced code helper functions, GurruDawcs
                    brings together tools that are useful in daily coding tasks.
                </p>

                <h2 className="text-2xl lg:text-2xl font-bold mt-10">
                    Why GurruDawcs?
                </h2>
                <div className="text-base lg:text-lg leading-relaxed mt-4 text-justify max-w-4xl">
                    As a developer, you often find yourself reinventing the
                    wheel or searching for utilities scattered across the web.
                    GurruDawcs bridges that gap by offering:
                    <ul className="list-disc list-inside mt-4">
                        <li>
                            <strong>Well-documented libraries:</strong>{" "}
                            Thoroughly explained with examples, best practices,
                            and usage guidelines.
                        </li>
                        <li>
                            <strong>Utility tools:</strong> Ready-to-use code
                            snippets and tools that streamline daily development
                            tasks.
                        </li>
                        <li>
                            <strong>Developer-centric approach:</strong> Built
                            by a developer, for developers—every tool is
                            designed to save time and effort.
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl lg:text-2xl font-bold mt-10">
                    {"What You'll Find Here"}
                </h2>
                <div className="text-base lg:text-lg leading-relaxed mt-4 text-justify max-w-4xl">
                    {"On GurruDawcs, you'll find documentation for:"}
                    <ul className="list-disc list-inside mt-4">
                        <li>
                            <strong>JavaScript/TypeScript libraries:</strong>{" "}
                            String utilities, array helpers, and more.
                        </li>
                        <li>
                            <strong>Utility functions:</strong> Reusable
                            functions that solve common development problems.
                        </li>
                        <li>
                            <strong>Code snippets:</strong> Handy snippets to
                            accelerate development.
                        </li>
                        <li>
                            <strong>Best practices and tips:</strong>{" "}
                            Recommendations for writing efficient, maintainable
                            code.
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl lg:text-2xl font-bold mt-10">
                    Who is Behind GurruDawcs?
                </h2>
                <p className="text-base lg:text-lg leading-relaxed mt-4 text-justify max-w-4xl">
                    {"I'm"} <strong>Ashutosh Pawar</strong>,{" "}
                    {`a passionate developer
                with experience in building web applications and creating
                utility libraries. GurruDawcs was born out of the need to
                organize and document the tools I’ve built and used over time.
                My goal is to share these with the developer community, helping
                others streamline their workflow as well.`}
                </p>

                <h2 className="text-2xl lg:text-2xl font-bold mt-10">
                    Get Started
                </h2>
                <p className="text-base lg:text-lg leading-relaxed mt-4 text-justify max-w-4xl">
                    Explore the documentation, contribute, or simply get
                    inspired by the tools available on GurruDawcs. Happy coding!
                </p>
            </div>
        </div>
    );
}
