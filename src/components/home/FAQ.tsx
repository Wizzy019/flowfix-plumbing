import { ChevronDown, ChevronRight } from "lucide-react";
import Container from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { faqs } from "../../data/faq";
import { useState } from "react";

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="mb-8">
      <SectionTitle title="FREQUENTLY ASKED QUESTIONS" />
      <Container
        vatiant="surface"
        className="bg-surface"
        children={
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full bg-surface-2 p-4 flex items-center gap-2"
                >
                  {openId === faq.id ? <ChevronDown /> : <ChevronRight />}
                  <span className="text-text ">{faq.question}</span>
                </button>
                {openId === faq.id && (
                  <p className=" px-10 py4 text-xs text-text-light">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        }
      />
    </section>
  );
};
