import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "1 День",
    price: "199",
    period: "день",
    description: "Попробуй все возможности",
    features: [
      "Все функции",
      "Обновления",
      "Поддержка 24/7",
      "Stealth Mode"
    ],
    popular: false,
    color: "from-zinc-800 to-zinc-900",
    borderColor: "border-zinc-700"
  },
  {
    name: "1 Неделя",
    price: "799",
    period: "неделя",
    description: "Оптимальный выбор",
    features: [
      "Все функции",
      "Приоритетные обновления",
      "VIP поддержка 24/7",
      "Stream Proof",
      "Custom конфиги",
      "Доступ к бета-версиям"
    ],
    popular: true,
    color: "from-purple-600 to-pink-600",
    borderColor: "border-purple-500"
  },
  {
    name: "1 Месяц",
    price: "1999",
    period: "месяц",
    description: "Максимальная выгода",
    features: [
      "Все функции",
      "Ранний доступ к обновлениям",
      "Персональная поддержка",
      "Premium конфиги",
      "Приоритет в очереди",
      "Эксклюзивные функции",
      "Скидка на продление 20%"
    ],
    popular: false,
    color: "from-blue-600 to-cyan-600",
    borderColor: "border-blue-500"
  }
]

export function PricingSection() {
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
            <span className="text-3xl">💰</span>
            <span className="text-purple-300 font-bold">Тарифы</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Выбери свою{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              силу
            </span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-medium">
            ⚡ Мгновенная активация после оплаты. Без скрытых платежей.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white text-sm font-black px-6 py-2 rounded-full shadow-2xl shadow-purple-500/50 border-2 border-white/30"
                  >
                    ⭐ ПОПУЛЯРНЮЙ ⭐
                  </motion.div>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} ${plan.popular ? 'opacity-20' : 'opacity-10'}`} />
              <div className={`absolute inset-0 border-3 ${plan.borderColor} rounded-3xl ${plan.popular ? 'shadow-2xl shadow-purple-500/50' : ''}`} />
              
              <div className="relative p-10 bg-zinc-900/70 backdrop-blur-xl h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-white mb-3">{plan.name}</h3>
                  <p className="text-zinc-300 font-medium">🔥 {plan.description}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-6xl font-black ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className="text-zinc-300 text-2xl font-bold">₽</span>
                  </div>
                  <p className="text-zinc-400 text-lg font-medium mt-2">🕒 за {plan.period}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, featureIdx) => (
                    <motion.li
                      key={featureIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + featureIdx * 0.05, duration: 0.3 }}
                      whileHover={{ x: 5, transition: { duration: 0.15 } }}
                      className="flex items-center gap-4 text-zinc-200 font-medium bg-black/20 rounded-xl p-3 border border-white/5 hover:border-purple-500/30"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="w-4 h-4 text-green-400" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-5 rounded-2xl font-black text-lg text-white relative overflow-hidden group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-2xl shadow-purple-500/60 hover:shadow-purple-500/80'
                      : 'bg-gradient-to-r from-zinc-800 to-zinc-700 border-2 border-zinc-600 hover:shadow-zinc-500/50'
                  } transition-shadow duration-200`}
                >
                  <span className="relative z-10">🛒 Купить сейчас</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-zinc-900/50 to-purple-900/30 border border-purple-500/30 rounded-2xl p-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-8 text-zinc-300 font-medium">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="w-6 h-6 text-green-400" />
              Безопасная оплата
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="w-6 h-6 text-yellow-400" />
              Активация 1 мин
            </div>
            <div className="flex items-center gap-2">
              <Icon name="RefreshCw" className="w-6 h-6 text-blue-400" />
              Возврат 24ч
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}