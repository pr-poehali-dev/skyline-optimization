import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import { PurchaseModal } from "./PurchaseModal"

const plans = [
  {
    name: "1 Неделя",
    price: 799,
    period: "неделя",
    description: "Оптимальный выбор",
    features: [
      "Все функции",
      "Обновления",
      "Поддержка 24/7",
      "Stealth Mode"
    ]
  },
  {
    name: "2 Недели",
    price: 1499,
    period: "2 недели",
    description: "Выгодное предложение",
    features: [
      "Все функции",
      "Приоритетные обновления",
      "VIP поддержка 24/7",
      "Stream Proof",
      "Custom конфиги"
    ],
    discount: "Скидка 6%"
  },
  {
    name: "1 Месяц",
    price: 1999,
    period: "месяц",
    description: "Максимальная выгода",
    features: [
      "Все функции",
      "Ранний доступ",
      "Персональная поддержка",
      "Premium конфиги",
      "Эксклюзивные функции",
      "Скидка на продление"
    ],
    discount: "Скидка 20%"
  }
]

export function PricingSection() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1)
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)

  const selectedPlan = plans[selectedPlanIndex]

  return (
    <section id="pricing" className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 rounded-full px-6 py-3 mb-6">
            <img 
              src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
              alt="KAGE" 
              className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
            />
            <span className="text-purple-300 font-bold">Тарифы</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Выбери свою{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              силу
            </span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-medium">
            Мгновенная активация после оплаты. Без скрытых платежей.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <input
                type="range"
                min="0"
                max="2"
                value={selectedPlanIndex}
                onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #9333ea 0%, #9333ea ${(selectedPlanIndex / 2) * 100}%, #27272a ${(selectedPlanIndex / 2) * 100}%, #27272a 100%)`
                }}
              />
              <div className="flex justify-between mt-4">
                {plans.map((plan, idx) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlanIndex(idx)}
                    className={`flex flex-col items-center transition-all duration-300 ease-in-out ${
                      selectedPlanIndex === idx ? 'scale-110' : 'scale-90 opacity-50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 mb-2 transition-all duration-300 ${
                      selectedPlanIndex === idx
                        ? 'border-purple-400 bg-purple-500 shadow-lg shadow-purple-500/50'
                        : 'border-zinc-600 bg-zinc-800'
                    }`} />
                    <span className={`text-sm font-bold transition-all duration-300 ${
                      selectedPlanIndex === idx ? 'text-white' : 'text-zinc-500'
                    }`}>
                      {plan.name === "1 Неделя" ? "Неделя" : plan.name === "2 Недели" ? "Две недели" : "Месяц"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            key={selectedPlanIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
            <div className="absolute inset-0 border-2 border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/50" />
            
            <div className="relative p-6 bg-zinc-900/70 backdrop-blur-xl">
              {selectedPlan.discount && (
                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-400/50 text-green-300 text-xs font-bold px-3 py-1 rounded-lg">
                  {selectedPlan.discount}
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-2xl font-black text-white mb-2">{selectedPlan.name}</h3>
                <p className="text-zinc-300 font-medium text-sm">{selectedPlan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    {selectedPlan.price}
                  </span>
                  <span className="text-zinc-300 text-2xl font-bold">₽</span>
                </div>
                <p className="text-zinc-400 text-base font-medium">за {selectedPlan.period}</p>
              </div>

              <ul className="space-y-2 mb-6 max-w-md mx-auto">
                {selectedPlan.features.map((feature, featureIdx) => (
                  <motion.li
                    key={featureIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIdx * 0.05, duration: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-3 text-zinc-200 font-medium bg-black/20 rounded-lg p-3 border border-white/5 text-sm"
                  >
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="w-3 h-3 text-green-400" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={() => setIsPurchaseModalOpen(true)}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl font-black text-base text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-2xl shadow-purple-500/60 hover:shadow-purple-500/80 transition-shadow duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Icon name="ShoppingCart" className="w-5 h-5" />
                  Купить сейчас
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-zinc-900/50 to-purple-900/30 border border-purple-500/30 rounded-2xl p-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-8 text-zinc-300 font-medium flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="w-6 h-6 text-green-400" />
              Безопасная оплата
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="w-6 h-6 text-yellow-400" />
              Активация 1 мин
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Lock" className="w-6 h-6 text-blue-400" />
              SSL шифрование
            </div>
          </div>
        </motion.div>
      </div>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        plan={{
          name: selectedPlan.name,
          price: String(selectedPlan.price),
          period: selectedPlan.period,
          description: selectedPlan.description
        }}
      />
    </section>
  )
}