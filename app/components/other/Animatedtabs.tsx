"use client";
import { motion } from "framer-motion";

const AnimatedTabs = ({
  activeTab,
  handleTabClick,
}: {
  activeTab: string;
  handleTabClick: any;
}) => {
  const tabs = [
    { name: "All", id: "all" },
    { name: "Frontend", id: "frontend" },
    { name: "Fullstack", id: "fullstack" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Tab Selector */}
      <div className="relative w-[300px]">
        <div className="flex  gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative z-10 w-full py-2 text-center text-sm font-semibold transition-colors duration-200 ${
                activeTab === tab.id ? "text-white" : "text-gray-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Tab Highlight Animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-indigo-600"
          initial={false}
          animate={{
            x:
              activeTab === "all"
                ? 0
                : activeTab === "frontend"
                ? "100%"
                : "200%",
            width: "33.33%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default AnimatedTabs;
