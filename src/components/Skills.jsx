import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Combined crisp, standardized SVG tech brand icons for single slide
const technologies = [
  {
    name: "React 19",
    color: "#61DAFB",
    svg: (
      <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    color: "#ffffff",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="white" fillOpacity="0.1" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    )
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#3178C6"/>
        <path d="M72.9 69.4H83V106H94.4V69.4H104.5V59.8H72.9V69.4ZM58.3 75.3C58.3 64.9 50.8 60 41.5 60C33.1 60 25.8 63.8 23 68.3L30.9 74.3C33.2 71.3 37.1 68.7 41.6 68.7C46.1 68.7 49 70.8 49 74.5C49 78.4 46.1 80.5 40.8 82.8C31.5 86.9 23.3 91.8 23.3 100.8C23.3 109.8 30.8 116 41.7 116C50.6 116 57.5 111.9 61 106.6L53.4 100.5C51 103.8 46.8 106.6 42.1 106.6C37 106.6 33.6 103.9 33.6 99.8C33.6 95.3 37.4 93.1 43.5 90.4C52.9 86.4 58.3 82.3 58.3 75.3Z" fill="white"/>
      </svg>
    )
  },
  {
    name: "JavaScript (ES6+)",
    color: "#F7DF1E",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
        <path d="M73.5 106.3C77.4 108.6 83.2 110.8 90.6 110.8C103.4 110.8 111.4 104.2 111.4 92.5V54.7H96.1V92.2C96.1 98.4 92.3 101.4 86.5 101.4C82.7 101.4 78.6 99.9 76.5 98.6L73.5 106.3ZM28 104.9C33.7 108 42.1 110.8 51.5 110.8C68.7 110.8 78.8 101.8 78.8 88.3C78.8 77 71.7 70.9 58.4 65.4C48.7 61.3 44.5 58.5 44.5 54C44.5 49.9 48.3 46.8 54.4 46.8C60.4 46.8 66 49.3 69.5 51.8L74.3 43.1C70.1 40 62.8 37.7 54.2 37.7C38.9 37.7 29.5 46.3 29.5 58.6C29.5 70.4 37.4 76.2 50 81.5C59.9 85.8 63.8 88.9 63.8 93.9C63.8 98.7 59.3 102 51.9 102C44.3 102 36.6 98.9 31.9 95.8L28 104.9Z" fill="#1E2022"/>
      </svg>
    )
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M63.6 10.7C42.8 10.7 44.1 19.7 44.1 19.7L44.2 29.1H64.2V32H35.8C25.1 32 16.4 38.3 16.4 51C16.4 63.7 23.4 68.6 28.5 70V59.8C28.5 47.9 38.1 47.3 38.1 47.3H58.1C68.3 47.3 68.3 37.4 68.3 37.4V19.7C68.3 19.7 69.4 10.7 63.6 10.7ZM53.6 16.8C55.9 16.8 57.7 18.6 57.7 20.8C57.7 23.1 55.9 24.9 53.6 24.9C51.4 24.9 49.6 23.1 49.6 20.8C49.6 18.6 51.4 16.8 53.6 16.8Z" fill="#3776AB"/>
        <path d="M64.4 117.3C85.2 117.3 83.9 108.3 83.9 108.3L83.8 98.9H63.8V96H92.2C102.9 96 111.6 89.7 111.6 77C111.6 64.3 104.6 59.4 99.5 58V68.2C99.5 80.1 89.9 80.7 89.9 80.7H69.9C59.7 80.7 59.7 90.6 59.7 90.6V108.3C59.7 108.3 58.6 117.3 64.4 117.3ZM74.4 111.2C72.1 111.2 70.3 109.4 70.3 107.2C70.3 104.9 72.1 103.1 74.4 103.1C76.6 103.1 78.4 104.9 78.4 107.2C78.4 109.4 76.6 111.2 74.4 111.2Z" fill="#FFD43B"/>
      </svg>
    )
  },
  {
    name: "Django",
    color: "#092E20",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#0C4B33"/>
        <path d="M57.6 25H70.7V79.2C65.5 80.4 60.5 80.8 54.8 80.8C40.6 80.8 32.7 74.2 32.7 61.2C32.7 48.7 41.5 41.5 54.1 41.5C55.4 41.5 56.5 41.6 57.6 41.8V25ZM57.6 51.5C56.6 51.3 55.6 51.2 54.5 51.2C47.6 51.2 43.4 55.4 43.4 61.5C43.4 67.4 47.1 71.2 54.2 71.2C55.5 71.2 56.6 71 57.6 70.7V51.5ZM77.9 36.3H90.8V79.9H77.9V36.3ZM77.9 24.3H90.8V32.9H77.9V24.3ZM77.9 83.2H90.8V95H77.9V83.2Z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M64 12.8L19.2 38.6V90.3L64 116.1L108.8 90.3V38.6L64 12.8Z" fill="#339933"/>
        <path d="M64 25.6L97.7 45V83.8L64 103.2L30.3 83.8V45L64 25.6Z" fill="#090A0F"/>
        <path d="M64 36.5L88.2 50.4V78.4L64 92.3L39.8 78.4V50.4L64 36.5Z" fill="#339933" fillOpacity="0.4"/>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M32 48C37.3 32 48 24 64 24C85.3 24 88 40 98.7 42.7C105.8 44.5 112 40 117.3 29.3C112 45.3 101.3 53.3 85.3 53.3C64 53.3 61.3 37.3 50.7 34.7C43.5 32.8 37.3 37.3 32 48ZM10.7 82.7C16 66.7 26.7 58.7 42.7 58.7C64 58.7 66.7 74.7 77.3 77.3C84.5 79.2 90.7 74.7 96 64C90.7 80 80 88 64 88C42.7 88 40 72 29.3 69.3C22.2 67.5 16 72 10.7 82.7Z" fill="#38B2AC"/>
      </svg>
    )
  },
  {
    name: "Vue.js",
    color: "#4FC08D",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M80.7 16H107.8L64 92.1L20.2 16H47.3L64 45.2L80.7 16Z" fill="#42B883"/>
        <path d="M47.3 16H20.2L64 92.1L107.8 16H80.7L64 45.2L47.3 16Z" fill="#42B883"/>
        <path d="M47.3 16H20.2L64 92.1L107.8 16H80.7L64 45.2L47.3 16Z" fill="#35495E" fillOpacity="0.85"/>
        <path d="M64 45.2L47.3 16H0L64 126.9L128 16H80.7L64 45.2Z" fill="#42B883"/>
      </svg>
    )
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M112.5 38.2L89.6 25L66.7 38.2L89.6 51.5L112.5 38.2Z" fill="#FF2D20"/>
        <path d="M63.7 40L40.8 26.8L17.9 40L40.8 53.2L63.7 40Z" fill="#FF2D20"/>
        <path d="M63.7 93.3L40.8 80.1L17.9 93.3L40.8 106.6L63.7 93.3Z" fill="#FF2D20"/>
        <path d="M65.2 42.6V91.7L88.1 104.9V55.8L65.2 42.6Z" fill="#FF2D20" fillOpacity="0.85"/>
        <path d="M89.6 55.8V104.9L112.5 91.7V42.6L89.6 55.8Z" fill="#FF2D20" fillOpacity="0.7"/>
        <path d="M16.4 42.6V91.7L39.3 104.9V55.8L16.4 42.6Z" fill="#FF2D20" fillOpacity="0.85"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    color: "#4479A1",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#00618A"/>
        <text x="64" y="76" textAnchor="middle" fill="white" fontWeight="900" fontSize="34" fontFamily="sans-serif">SQL</text>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#336791"/>
        <text x="64" y="76" textAnchor="middle" fill="white" fontWeight="900" fontSize="30" fontFamily="sans-serif">PG</text>
      </svg>
    )
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M72.2 118.8C68.9 123.1 61.9 120.9 61.6 115.5L59 69.8H106.8C114.7 69.8 119.2 79 114.3 85.2L72.2 118.8Z" fill="#3ECF8E"/>
        <path d="M55.8 9.2C59.1 4.9 66.1 7.1 66.4 12.5L69 58.2H21.2C13.3 58.2 8.8 49 13.7 42.8L55.8 9.2Z" fill="#249361"/>
      </svg>
    )
  },
  {
    name: "MongoDB",
    color: "#47A248",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M64 6C64 6 36.2 36.6 36.2 68.3C36.2 88.5 50.3 105.7 64 122C77.7 105.7 91.8 88.5 91.8 68.3C91.8 36.6 64 6 64 6Z" fill="#47A248"/>
        <path d="M64 6V122C77.7 105.7 91.8 88.5 91.8 68.3C91.8 36.6 64 6 64 6Z" fill="#499D4A" fillOpacity="0.8"/>
        <path d="M64 100V122C64 122 65 119 66 116V100H64Z" fill="#3FA037"/>
      </svg>
    )
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M26.4 92.4L37.8 21.8C38.1 19.8 40.8 19.3 41.8 21L53.7 43.1L26.4 92.4Z" fill="#FFA000"/>
        <path d="M26.4 92.4L77.9 44.5C79.4 43.1 81.8 44.2 81.8 46.3L87.2 80.2L26.4 92.4Z" fill="#F57C00"/>
        <path d="M67.3 113.8C65.3 115 62.7 115 60.7 113.8L18.4 89.2C17.2 88.5 17.5 86.7 18.9 86.4L26.4 84.8L64 111.7L67.3 113.8Z" fill="#FFCA28"/>
        <path d="M87.2 80.2L109.6 89.2C110.8 89.9 110.5 91.7 109.1 92L67.3 113.8L87.2 80.2Z" fill="#FFA000"/>
      </svg>
    )
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M123.6 57.6C120.9 56.4 113.2 56 109.1 59.8C108.5 54.3 105.7 49 101.5 45.4L98.6 47.9C102.3 52.8 103.5 59.4 102.3 64.9C97.7 66.8 91 66.3 84.7 63.4C80.2 61.3 75.3 60.3 70.3 60.3H3.6C1.6 66.9 2.1 74 5.1 80.3C11.5 93.6 24.3 103.3 39.7 106.3C72.5 112.7 99.4 96.5 109.3 78.5C122.2 78.4 127 68.3 127 68.3C127 68.3 126.3 62 123.6 57.6ZM34.5 35.8H48.9V50.2H34.5V35.8ZM53.4 35.8H67.8V50.2H53.4V35.8ZM72.2 35.8H86.6V50.2H72.2V35.8ZM15.7 54.7H30.1V69.1H15.7V54.7ZM34.5 54.7H48.9V69.1H34.5V54.7ZM53.4 54.7H67.8V69.1H53.4V54.7ZM72.2 54.7H86.6V69.1H72.2V54.7Z" fill="#2496ED"/>
      </svg>
    )
  },
  {
    name: "Git & GitHub",
    color: "#F05032",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M124.7 57.3L70.7 3.3C68.6 1.2 65.1 0 62.4 0C59.7 0 56.2 1.2 54.1 3.3L40.9 16.5L57.5 33.1C60.6 32.1 64.2 32.7 66.8 35.3C69.4 37.9 70.1 41.5 69.1 44.6L84.8 60.3C87.9 59.3 91.5 60 94.1 62.6C97.8 66.3 97.8 72.3 94.1 76C90.4 79.7 84.4 79.7 80.7 76C77.8 73.1 77.2 68.9 78.7 65.5L64.2 51V88.8C65.5 89.6 66.7 90.7 67.5 92.2C70 96.6 68.5 102.1 64.1 104.6C59.7 107.1 54.2 105.6 51.7 101.2C49.2 96.8 50.7 91.3 55.1 88.8C56.2 88.2 57.3 87.8 58.5 87.6V49.6C57.3 49.4 56.2 49 55.1 48.4C52.2 46.7 50.4 43.8 50 40.5L33.3 24.1L3.3 54.1C1.2 56.2 0 59.7 0 62.4C0 65.1 1.2 68.6 3.3 70.7L57.3 124.7C59.4 126.8 62.9 128 65.6 128C68.3 128 71.8 126.8 73.9 124.7L124.7 73.9C126.8 71.8 128 68.3 128 65.6C128 62.9 126.8 59.4 124.7 57.3Z" fill="#F05032"/>
      </svg>
    )
  },
  {
    name: "Vercel",
    color: "#ffffff",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <path d="M64 12L128 116H0L64 12Z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Postman",
    color: "#FF6C37",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#FF6C37"/>
        <text x="64" y="78" textAnchor="middle" fill="white" fontWeight="900" fontSize="38" fontFamily="sans-serif">PM</text>
      </svg>
    )
  },
  {
    name: "Java",
    color: "#ED8B00",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#1E2022"/>
        <path d="M50.4 87.2C50.4 87.2 46.3 89.2 53.4 90.1C62 91.2 68.8 91 79.4 89.3C79.4 89.3 82.5 91.6 77.2 93C67.7 95.5 50.8 95.8 43.8 93.3C39.4 91.8 45.4 88.5 50.4 87.2ZM53 77.8C53 77.8 43.8 80.5 49.6 81.7C56.6 83.1 65.8 83.3 78.4 81.3C78.4 81.3 80.9 83.4 76.9 84.7C67.7 87.6 49.3 87.7 42.1 84.9C36.9 82.8 47.7 79.3 53 77.8ZM68.1 58.7C71.7 63 68.7 67.5 68.7 67.5C68.7 67.5 81.5 61.2 75.3 51.5C69.7 42.7 66.8 38.6 80.2 24.3C80.2 24.3 60 33.6 68.1 58.7ZM61 98.7C68.5 99.2 78.4 98.5 83.6 96.6C83.6 96.6 81.9 98.7 76.2 99.9C67.8 101.7 54.4 102 46.6 100.2C46.6 100.2 43.1 101.8 38 99.8C38 99.8 45.5 104.2 60.1 104.2C76.8 104.2 91.1 99.4 91.1 99.4C91.1 99.4 90.1 101.4 84.6 103.1C75.8 105.8 57.5 106.6 48.7 104.7C42.8 103.5 48.1 101.1 61 98.7Z" fill="#ED8B00"/>
      </svg>
    )
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering & Tooling Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

      </div>

      {/* Full-width Infinite Horizontal Slideshow Marquee (Single Moving Track) */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Edge Fade Gradients for Seamless Depth */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#090a0f] via-[#090a0f]/80 to-transparent z-20 pointer-events-none" />

        {/* Single Slideshow Row Moving Smoothly */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-5 sm:gap-7 w-max py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 36,
              repeat: Infinity,
            }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="group relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#12141d]/90 border border-brand-500/20 hover:border-brand-500/60 hover:bg-brand-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-brand-500/20 cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {tech.svg}
                </div>

                {/* Subtle Hover Tooltip */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#090a0f] border border-brand-500/30 text-[11px] font-semibold text-white whitespace-nowrap shadow-xl z-30">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
