import React from "react";
import { motion } from "framer-motion";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      className="pt-20"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
