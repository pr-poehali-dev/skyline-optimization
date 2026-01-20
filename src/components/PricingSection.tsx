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
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Выбери свой <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">тариф</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Мгновенная активация после оплаты. Без скрытых платежей.
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
              whileHover={{ y: -12, scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    ПОПУЛЯРНЫЙ
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10`} />
              <div className={`absolute inset-0 border-2 ${plan.borderColor} rounded-2xl`} />
              
              <div className="relative p-8 bg-zinc-900/50 backdrop-blur-xl h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400">₽</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-1">за {plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIdx) => (
                    <motion.li
                      key={featureIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + featureIdx * 0.05 }}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <Icon name="CheckCircle" className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3.5 rounded-xl font-bold text-white transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/50'
                      : 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700'
                  }`}
                >
                  Купить сейчас
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-zinc-400 text-sm"
        >
          <Icon name="Shield" className="w-5 h-5 inline-block mr-2" />
          Все платежи защищены. Автоматическая активация в течение 1 минуты.
        </motion.div>
      </div>
    </section>
  )
}
