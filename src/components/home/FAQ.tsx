import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Container from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { faqs } from "../../data/faq";
import FadeUp from "../animations/FadeUp";

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <FadeUp>
      <section className="mb-8 py-4 bg-surface">
        <SectionTitle title="FREQUENTLY ASKED QUESTIONS" />
        <Container
          vatiant="transparent"
          className=""
          children={
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="">
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full bg-surface-2 p-4 flex items-center gap-2"
                  >
                    <motion.div
                      animate={{
                        rotate: openId === faq.id ? 90 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronRight />
                    </motion.div>
                    <span className="text-text ">{faq.question}</span>
                  </button>
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-10 py4 text-xs text-text-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          }
        />
      </section>
    </FadeUp>
  );
};
