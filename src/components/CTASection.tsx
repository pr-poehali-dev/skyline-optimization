import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import { PurchaseModal } from "./PurchaseModal"

const defaultPlan = {
  name: "1 Неделя",
  price: "799",
  period: "неделя",
  description: "Оптимальный выбор"
}

export function CTASection() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false)

  return (
    <>
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-purple-900/30 via-zinc-900/50 to-blue-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Icon name="Zap" className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Мгновенная активация</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Начни доминировать<br />в Hytale <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">прямо сейчас</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Присоединяйся к 5000+ игрокам, которые уже выбрали KAGE. Невидимая защита, все функции, поддержка 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => setPurchaseModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <Icon name="ShoppingCart" className="w-5 h-5" />
                Купить подписку
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 border-2 border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
                Связаться в Discord
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-10 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="w-4 h-4 text-green-400" />
                <span>Безопасная оплата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="w-4 h-4 text-yellow-400" />
                <span>Активация 1 мин</span>
              </div>
            </div>
          </motion.div>

          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/30 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <PurchaseModal isOpen={purchaseModalOpen} onClose={() => setPurchaseModalOpen(false)} plan={defaultPlan} />
    </section>
    </>
  )
}