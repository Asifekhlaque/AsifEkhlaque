import { useState } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import { Undo2, FolderOpen } from "lucide-react";

/* =========================
   JSON DATA (REPLACE / EDIT)
========================= */
const skillsData = [
    {
        title: "React.js",
        category: "Frontend",
        description: "Developing component-based single-page applications with state management and reusable UI components.",
        link: "https://react.dev",
    },
    {
        title: "Node.js & Express.js",
        category: "Backend",
        description: "Building REST APIs, handling server-side logic, and managing routes efficiently.",
        link: "https://nodejs.org",
    },
    {
        title: "Core Java",
        category: "Backend",
        description: "Writing clean, efficient, and maintainable code using object-oriented programming principles.",
        link: "https://nodejs.org",
    },
    {
        title: "UI/UX Design",
        category: "Design",
        description: "Designing user-centric interfaces with strong focus on usability, accessibility, and visual hierarchy.",
        link: "https://figma.com",
    },
    {
        title: "Canva & Photoshop",
        category: "Design",
        description: "Creating social media creatives, posters, banners, and marketing designs.",
        link: "https://figma.com",
    },
    {
        title: "AI & Prompt Engineering",
        category: "Design",
        description: "Creating optimized prompts to generate high-quality text, code, and creative outputs using AI tools.",
        link: "https://figma.com",
    },
    {
        title: "Wordpress",
        category: "Frontend",
        description: "I know WordPress and can create, customize, and manage websites using themes, plugins, and page builders.",
        link: "https://react.dev",
    },
    {
        title: "Video Editing",
        category: "Design",
        description: "I can create and edit videos using VN, Capcut, and other video editing software.",
        link: "https://figma.com",
    },
];

/* ========================= */

const categories = ["All", "Frontend", "Backend", "Design"];

const Filter = ({ onHomeClick }) => {
    const [active, setActive] = useState("All");
    const [showProjects, setShowProjects] = useState(false);

    const filteredData =
        active === "All"
            ? skillsData
            : skillsData.filter((item) => item.category === active);

    return (
        <div className="flex justify-center items-center pt-10">
            <section className="max-w-6xl mx-auto px-4 py-10 w-full">

                {/* Top Buttons */}
                <div className="flex justify-between pb-6">
                    <button
                        onClick={onHomeClick}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white"
                    >
                        <Undo2 size={18} /> Home
                    </button>

                    <button
                        onClick={() => setShowProjects(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-orange-500 text-white hover:bg-gray-600"
                    >
                        <FolderOpen size={18} /> Projects
                    </button>
                </div>

                {/* CONDITIONAL RENDER */}
                {showProjects ? (
                    <Projects />
                ) : (
                    <>
                        {/* Heading */}
                        <h1 className="text-4xl font-bold text-white text-center mb-6">
                            My Skills
                        </h1>

                        {/* Filters */}
                        <div className="flex justify-center flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition
                                    ${active === cat
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredData.map((item, index) => (
                                <Skills
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    categories={item.category}
                                    
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default Filter;
