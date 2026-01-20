import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const featureCategories = [
  {
    category: "Combat",
    icon: "Swords",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    features: [
      { name: "Aimbot", description: "Автоматическое наведение на противников" },
      { name: "Triggerbot", description: "Автоматическая стрельба при наведении" },
      { name: "Kill Aura", description: "Автоматическая атака вокруг персонажа" },
      { name: "Velocity", description: "Уменьшение отбрасывания от ударов" },
    ]
  },
  {
    category: "Visuals",
    icon: "Eye",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    features: [
      { name: "ESP / Wallhack", description: "Видимость игроков сквозь стены" },
      { name: "Tracers", description: "Линии к противникам" },
      { name: "Chest ESP", description: "Показ сундуков и предметов" },
      { name: "Fullbright", description: "Полная яркость в темноте" },
    ]
  },
  {
    category: "Movement",
    icon: "Zap",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    features: [
      { name: "Fly", description: "Полёт в любом направлении" },
      { name: "Speed", description: "Увеличение скорости передвижения" },
      { name: "NoClip", description: "Прохождение сквозь блоки" },
      { name: "Spider", description: "Лазание по стенам" },
    ]
  },
  {
    category: "Stealth",
    icon: "Ghost",
    color: "from-zinc-500/20 to-slate-500/20",
    borderColor: "border-zinc-500/30",
    features: [
      { name: "AntiCheat Bypass", description: "Защита от обнаружения" },
      { name: "Stealth Mode", description: "Скрытие активных функций" },
      { name: "Panic Key", description: "Мгновенное отключение" },
      { name: "Stream Proof", description: "Защита от обнаружения на стримах" },
    ]
  }
]

export function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Полный <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">арсенал функций</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Все, что нужно для доминации в Hytale. Невидимая защита от античитов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {featureCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl border ${category.borderColor} rounded-2xl p-8 overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} border ${category.borderColor} flex items-center justify-center`}>
                    <Icon name={category.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.features.map((feature, featureIdx) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + featureIdx * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" className="w-3 h-3 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium group-hover/item:text-purple-300 transition-colors">{feature.name}</h4>
                        <p className="text-zinc-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
