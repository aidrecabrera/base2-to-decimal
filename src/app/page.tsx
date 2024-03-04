"use client";

import { Input } from "@/components/ui/input";
import { binaryToDecimalWithSteps } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const [decimal, setDecimal] = useState<number | null>(null);
  const [binary, setBinary] = useState<string>("");
  const [steps, setSteps] = useState<{ step: string; value: number }[]>([]);
  const converter = (value: string) => {
    const binaryRegex = /^[0-1]*$/;
    if (binaryRegex.test(value)) {
      setBinary(value);
      if (value === "") {
        setDecimal(null);
        setSteps([]);
      } else {
        const conversionSteps = binaryToDecimalWithSteps(parseInt(value));
        setDecimal(conversionSteps[conversionSteps.length - 1].value);
        setSteps(conversionSteps);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="flex flex-col items-center justify-center h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex flex-col gap-4 justify-center"
        variants={childVariants}
      >
        <motion.h1 className="w-full text-center" variants={childVariants}>
          {decimal !== null ? `Decimal: ${decimal}` : "Binary to Decimal"}
        </motion.h1>
        <motion.div variants={childVariants}>
          <Input
            autoComplete="off"
            placeholder="Binary"
            value={binary}
            onChange={(e) => {
              converter(e.target.value);
            }}
          />
        </motion.div>
        {steps.map((step, index) => (
          <motion.div key={index} variants={childVariants}>
            <p>{step.step}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}
