"use client";

import Gallery from "@/components/gallery";
import HireModal from "@/components/hire-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] scroll-smooth">
      {/* Main content */}
      <main className="px-4 pt-16 pb-16">
        <div className="container max-w-7xl mx-auto">
          {/* Banner + Header with profile picture */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-20"
          >
            {/* LinkedIn-like Banner */}
            <div className="relative w-full h-40 md:h-56 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl overflow-hidden shadow-md">
              <Image
                src="./banner.jpeg"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Picture & Name */}
            <div className="flex flex-col items-center -mt-14 md:-mt-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src="./main.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mt-4 text-3xl font-light tracking-wide text-center md:text-4xl lg:text-5xl"
              >
                <span className="font-normal">Danish</span>{" "}
                <span className="font-extralight text-neutral-400">Dalai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="mt-2 text-sm text-center text-neutral-500 md:text-base max-w-md mx-auto"
              >
                A collection of whimsical characters and vibrant illustrations
                from an independent cartoon artist.
              </motion.p>
            </div>
          </motion.header>

          {/* Gallery */}
          <Gallery />

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 flex flex-col items-center justify-center space-y-6"
          >
            <HireModal />
            <p className="text-xs text-neutral-400 mt-8">
              © {new Date().getFullYear()} • All copyrights protected to{" "}
              <a
                href="https://ehike.in"
                className="bg-clip-text text-transparent bg-gradient-to-br from-[#723FCD] to-[#DB9FF5] font-bold italic min-w-fit"
              >
                Ehike
              </a>
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}
