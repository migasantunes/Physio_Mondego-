"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BeamsBackground } from "@/components/ui/beams-background";

export function PulseFitHero({
  logo,
  navigation = [],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden bg-background text-white",
        className
      )}
      role="banner"
      aria-label="Hero section"
    >
      {/* Animated Beams Background */}
      <div className="absolute inset-0 z-0">
        <BeamsBackground className="absolute inset-0" />
        {/* Soft fading gradient to bridge the deep blue hero with the white page content below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16 py-8"
      >
        {/* Logo */}
        {logo && (
          <div className="font-bold text-2xl text-white font-sans drop-shadow-sm">
            {logo}
          </div>
        )}

        {/* Navigation */}
        {navigation && navigation.length > 0 && (
          <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex flex-row items-center gap-1 text-white/80 hover:text-white transition-colors font-sans text-base drop-shadow-sm"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="size-4" />}
              </button>
            ))}
          </nav>
        )}

        {/* CTA Button */}
        {ctaButton && (
          <button
            onClick={ctaButton.onClick}
            className="px-6 py-3 rounded-full bg-white text-blue-900 font-bold shadow-sm transition-all hover:scale-105"
          >
            {ctaButton.label}
          </button>
        )}
      </motion.header>

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-4 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl gap-8"
          >
            {/* Title */}
            <h1 className="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-white tracking-tight font-sans drop-shadow-lg">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="font-normal text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-blue-50 max-w-2xl font-sans drop-shadow-md">
              {subtitle}
            </p>

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-2"
              >
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    className="group flex flex-row items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-lg shadow-xl shadow-blue-900/30 transition-all hover:scale-105 hover:bg-blue-500"
                  >
                    {primaryAction.label}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                )}

                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium text-lg transition-all hover:scale-105 bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-xl"
                  >
                    {secondaryAction.label}
                  </button>
                )}
              </motion.div>
            )}

            {/* Disclaimer */}
            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm text-blue-200/80 italic mt-2 drop-shadow-sm"
              >
                {disclaimer}
              </motion.p>
            )}

            {/* Social Proof */}
            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center justify-center gap-3 mt-4"
              >
                <div className="flex flex-row -space-x-3 drop-shadow-md">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="rounded-full border-2 border-blue-900 w-10 h-10 object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-blue-100 pl-2 drop-shadow-sm">
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden py-12 bg-background" // The carousel shifts to the white background
        >
          {/* Transition wrapper to smooth the gradient cut-off for the carousel */}
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-transparent to-background -translate-y-full pointer-events-none" />

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center gap-6 pl-6"
            animate={{
              x: [0, -((programs.length * 380))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * 5,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate programs for seamless loop */}
            {[...programs, ...programs, ...programs].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={program.onClick}
                className="flex-shrink-0 cursor-pointer relative overflow-hidden rounded-[24px] shadow-xl w-[356px] h-[480px] bg-muted border border-border"
              >
                {/* Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest drop-shadow-md">
                    {program.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
