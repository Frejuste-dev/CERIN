import React from "react";
import { FinalCtaBanner } from "../../../components";

export const CtaSection: React.FC = () => {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinalCtaBanner variant="default" />
      </div>
    </section>
  );
};
