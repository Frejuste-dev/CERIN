import React from "react";
import { FinalCtaBanner } from "../../../components/FinalCtaBanner";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export const CtaSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Contact Support Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="bg-[#0B0B0B] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden mb-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7AC943]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Notre équipe d'orientation est disponible pour vous accompagner 
              et répondre à toutes vos interrogations spécifiques.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-[#7AC943] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-[#8BD852] transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                Nous contacter
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/22501010101?text=Bonjour, j'ai une question qui ne figure pas dans la FAQ."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white font-black text-sm uppercase tracking-widest rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <FinalCtaBanner variant="default" />
    </section>
  );
};
