"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";

// Sample portfolio items using the grid layout from the reference image
const portfolioItems = [
  {
    id: 1,
    title: "Abstract Blue Room",
    description: "Vibrant blue interior with artistic elements",
    image: "/public/Still_Life_3_Sketch.jpg",
    category: "Interior",
  },
  {
    id: 2,
    title: "Mountain Lake",
    description: "Serene lake with mountain and forest backdrop",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 3,
    title: "Portrait with Flowers",
    description: "Portrait of a woman surrounded by red flowers",
    image: "/placeholder.svg?height=600&width=600",
    category: "Portrait",
  },
  {
    id: 4,
    title: "Coastal Scene",
    description: "Beach with boats and clear blue water",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 5,
    title: "Forest Path",
    description: "Dark forest floor covered with fallen leaves",
    image: "/placeholder.svg?height=600&width=600",
    category: "Nature",
  },
  {
    id: 6,
    title: "Mountain Peak",
    description: "Majestic mountain peak against clear sky",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 7,
    title: "String Lights",
    description: "Warm glowing bulbs hanging in darkness",
    image: "/placeholder.svg?height=600&width=600",
    category: "Urban",
  },
  {
    id: 8,
    title: "Beach Chair",
    description: "Empty chair on sandy beach at sunset",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 9,
    title: "Asian Pavilion",
    description: "Traditional pavilion surrounded by greenery",
    image: "/placeholder.svg?height=600&width=600",
    category: "Architecture",
  },
  {
    id: 10,
    title: "Graffiti Alley",
    description: "Urban alleyway covered in colorful street art",
    image: "/placeholder.svg?height=600&width=600",
    category: "Urban",
  },
  {
    id: 11,
    title: "Campfire",
    description: "Glowing campfire at night",
    image: "/placeholder.svg?height=600&width=600",
    category: "Nature",
  },
  {
    id: 12,
    title: "Lake Buoy",
    description: "Yellow buoy floating in clear blue water",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 13,
    title: "Forest Road",
    description: "Long straight road through tall pine forest",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
  {
    id: 14,
    title: "Wheat Field",
    description: "Golden wheat field under blue sky",
    image: "/placeholder.svg?height=600&width=600",
    category: "Nature",
  },
  {
    id: 15,
    title: "Neon Graffiti",
    description: "Glowing neon street art on dark wall",
    image: "/placeholder.svg?height=600&width=600",
    category: "Urban",
  },
  {
    id: 16,
    title: "Coastal Cliffs",
    description: "Dramatic cliffs overlooking ocean",
    image: "/placeholder.svg?height=600&width=600",
    category: "Landscape",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [showTopButton, setShowTopButton] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(portfolioItems.map((item) => item.category))),
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrevious]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Minimal category filter */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-4 py-1 text-sm transition-all duration-300 rounded-full ${
              filter === category
                ? "bg-black text-white shadow-md"
                : "bg-transparent text-neutral-500 hover:bg-neutral-100 hover:shadow-sm"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Clean grid gallery layout */}
      <motion.div
        key={filter} // Re-animate when filter changes
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer aspect-square"
            onClick={() => openModal(index)}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30 flex items-end">
                <motion.div
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-3 w-full text-white"
                >
                  <h3 className="text-sm font-light">{item.title}</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 text-black shadow-lg hover:bg-white transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full screen image modal with navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
            onClick={closeModal}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 text-white transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 z-10 p-2 rounded-full bg-white/10 text-white transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 z-10 p-2 rounded-full bg-white/10 text-white transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] max-w-7xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={
                        filteredItems[selectedIndex].image || "/placeholder.svg"
                      }
                      alt={filteredItems[selectedIndex].title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 text-center text-white max-w-2xl"
              >
                <h2 className="text-xl font-light">
                  {filteredItems[selectedIndex].title}
                </h2>
                <p className="text-sm text-white/70 mt-1">
                  {filteredItems[selectedIndex].category}
                </p>
                <p className="text-sm text-white/70 mt-2">
                  {filteredItems[selectedIndex].description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
