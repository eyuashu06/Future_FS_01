import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Standardized, verified, properly oriented SVG tech brand icons
const technologies = [
  {
    name: "JavaScript (ES6+)",
    color: "#F7DF1E",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#F0DB4F"/>
        <path fill="#323330" d="M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237zM116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#007ACC"/>
        <path fill="#fff" d="M45.15 69.26h11.51v46.23h11.51V69.26h16.27v-5.12H28.88v5.12h16.27zm56.08-10.36c-6.82 1.29-11.49 5.64-12.82 11.87a25 25 0 00.22 8 16.48 16.48 0 003.43 6.25c2.54 2.74 5.32 4.46 11.77 7.24 5.59 2.44 7.59 3.61 8.59 5a5.43 5.43 0 01-.69 6.92c-2.7 2.43-8.16 2.72-12.16.62a16.78 16.78 0 01-4.74-4.54l-.75-1.11-3.59 2.08-10.42 6.03a9.34 9.34 0 00-1.15.73c-.14.24 2.1 3.55 3.25 4.82a23 23 0 0012.72 6.63 38.32 38.32 0 009.52.1c6.93-1.17 11.83-4.7 13.83-9.9 1.8-4.78 1.21-11.24-1.45-15.24-2.38-3.61-6.21-6.15-15.16-10-4.86-2.1-6.41-3.13-7.24-4.86a4.58 4.58 0 01-.54-2.34c-.02-3.27 2.42-5.26 6.21-5a7.09 7.09 0 015.87 3.53c.53.79 1 1.31 1.13 1.23 3.29-2 8.69-5.69 8.69-5.85a20.58 20.58 0 00-3-4 15.56 15.56 0 00-7.82-4.5 31.66 31.66 0 00-9.49-.26z"/>
      </svg>
    )
  },
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
        <text x="64" y="82" textAnchor="middle" fill="white" fontWeight="900" fontSize="48" fontFamily="sans-serif">dj</text>
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
        <text x="64" y="80" textAnchor="middle" fill="white" fontWeight="900" fontSize="38" fontFamily="sans-serif">SQL</text>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#336791"/>
        <text x="64" y="80" textAnchor="middle" fill="white" fontWeight="900" fontSize="38" fontFamily="sans-serif">PG</text>
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
        <text x="64" y="80" textAnchor="middle" fill="white" fontWeight="900" fontSize="40" fontFamily="sans-serif">PM</text>
      </svg>
    )
  },
  {
    name: "Java",
    color: "#ED8B00",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#1E2022"/>
        <text x="64" y="80" textAnchor="middle" fill="#ED8B00" fontWeight="900" fontSize="36" fontFamily="sans-serif">JAVA</text>
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

        {/* Single Slideshow Row Moving Smoothly with Pause on Hover */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-glide flex gap-5 sm:gap-7 py-2">
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
          </div>
        </div>

      </div>
    </section>
  );
}
