
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  id?: string;
}

export const AnimatedSection = ({ children, className, stagger = false, id }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = stagger ? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  } : {};

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
      className={cn("py-20 sm:py-28", className)}
    >
      {stagger ? (
        // Children of this component should be motion components with variants={variants}
        children
      ) : (
        <motion.div variants={variants}>
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};
