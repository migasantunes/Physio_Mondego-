"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialCard({ handleShuffle, testimonial, position, author, imageSrc, role }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150 || dragRef.current - e.clientX < -150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 flex flex-col h-[450px] w-[350px] select-none justify-center space-y-6 rounded-2xl border-2 border-border bg-card p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Quote className="absolute top-6 right-6 text-blue-500/20 size-12" />
      <img
        src={imageSrc}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-border object-cover"
      />
      <span className="text-center text-lg italic text-muted-foreground break-words overflow-hidden">"{testimonial}"</span>
      <div className="flex flex-col items-center">
        <span className="text-center text-sm font-medium text-blue-600">{author}</span>
        {role && <span className="text-center text-xs text-muted-foreground">{role}</span>}
      </div>
    </motion.div>
  );
}
