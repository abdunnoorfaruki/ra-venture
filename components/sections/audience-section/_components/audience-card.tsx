"use client";
import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function AudienceCard({
  icon: Icon,
  title,
  description,
  className,
}: AudienceCardProps) {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      whileInView={{
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "linear",
      }}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 origin-center ",
        "border border-purple-100/20 backdrop-blur-sm",
        className
      )}
    >
      <motion.div
        initial={{ y: -30, opacity: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 "
      >
        <Icon className="w-8 h-8 text-purple-600" />
      </motion.div>
      <motion.h3
        initial={{ x: 40, opacity: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className=" text-center md:text-left text-xl font-semibold text-heading mb-3"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ y: 40, opacity: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-center md:text-left text-para leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
