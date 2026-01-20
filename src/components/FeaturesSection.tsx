import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const featureCategories = [
  {
    category: "⚔️ Combat",
    icon: "Swords",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50",
    glowColor: "shadow-red-500/50",
    emoji: "🔥",
    features: [
      { name: "Aimbot", description: "Автоматическое наведение на противников", icon: "Target" },
      { name: "Triggerbot", description: "Автоматическая стрельба при наведении", icon: "Crosshair" },
      { name: "Kill Aura", description: "Автоматическая атака вокруг персонажа", icon: "Sword" },
      { name: "Velocity", description: "Уменьшение отбрасывания от ударов", icon: "Wind" },
    ]
  },
  {
    category: "👁️ Visuals",
    icon: "Eye",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50",
    glowColor: "shadow-purple-500/50",
    emoji: "✨",
    features: [
      { name: "ESP / Wallhack", description: "Видимость игроков сквозь стены", icon: "Scan" },
      { name: "Tracers", description: "Линии к противникам", icon: "TrendingUp" },
      { name: "Chest ESP", description: "Показ сундуков и предметов", icon: "Package" },
      { name: "Fullbright", description: "Полная яркость в темноте", icon: "Sun" },
    ]
  },
  {
    category: "⚡ Movement",
    icon: "Zap",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    emoji: "💨",
    features: [
      { name: "Fly", description: "Полёт в любом направлении", icon: "Plane" },
      { name: "Speed", description: "Увеличение скорости передвижения", icon: "Gauge" },
      { name: "NoClip", description: "Прохождение сквозь блоки", icon: "Ghost" },
      { name: "Spider", description: "Лазание по стенам", icon: "Mountain" },
    ]
  },
  {
    category: "🥷 Stealth",
    icon: "Ghost",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50",
    glowColor: "shadow-zinc-500/50",
    emoji: "🌙",
    features: [
      { name: "AntiCheat Bypass", description: "Защита от обнаружения", icon: "ShieldCheck" },
      { name: "Stealth Mode", description: "Скрытие активных функций", icon: "EyeOff" },
      { name: "Panic Key", description: "Мгновенное отключение", icon: "AlertTriangle" },
      { name: "Stream Proof", description: "Защита от обнаружения на стримах", icon: "Video" },
    ]
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-pink-600/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-3xl">⚡</span>
            <span className="text-purple-300 font-bold">Полный арсенал</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Все, что нужно для{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              доминации
            </span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-medium">
            🐺 Невидимая защита от античитов в каждой функции
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {featureCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.03, rotateZ: 1, transition: { duration: 0.2 } }}
              className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl border-2 ${category.borderColor} rounded-3xl p-10 overflow-hidden group cursor-pointer shadow-2xl ${category.glowColor} hover:shadow-3xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">{category.emoji}</div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.4 } }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} border-2 ${category.borderColor} flex items-center justify-center shadow-xl ${category.glowColor}`}
                    >
                      <Icon name={category.icon} className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-white">{category.category}</h3>
                  </div>
                  <span className="text-4xl group-hover:scale-125 transition-transform">{category.emoji}</span>
                </div>

                <div className="space-y-5">
                  {category.features.map((feature, featureIdx) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + featureIdx * 0.05, duration: 0.3 }}
                      whileHover={{ x: 10, scale: 1.05, transition: { duration: 0.15 } }}
                      className="flex items-start gap-4 bg-black/20 rounded-xl p-4 border border-white/5 hover:border-white/20 hover:bg-black/30 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                        <Icon name={feature.icon} className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg group-hover/item:text-purple-300 transition-colors">{feature.name}</h4>
                        <p className="text-zinc-400 text-sm mt-1">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:rotate-90 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}