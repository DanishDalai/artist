"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Phone } from "lucide-react"; // or use your preferred icons
import Image from "next/image";

export default function HireModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full px-8 shadow-sm hover:shadow-md"
          >
            Hire Me
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-center">
              Connect with me
            </DialogTitle>
            <DialogDescription className="text-center">
              Choose your preferred platform.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/danish-dalai-65b879240/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0077B5] text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://wa.me/+918839018202"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src="./whatsapp.webp"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/dinodalai_artist/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
