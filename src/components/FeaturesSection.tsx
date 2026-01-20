import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const featureCategories = [
  {
    id: "combat",
    category: "Combat",
    icon: "Swords",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50",
    emoji: "⚔️",
    features: [
      { name: "Aimbot", description: "Автоматическое наведение на противников", icon: "Target" },
      { name: "Triggerbot", description: "Автоматическая стрельба при наведении", icon: "Crosshair" },
      { name: "Kill Aura", description: "Автоматическая атака вокруг персонажа", icon: "Sword" },
      { name: "Velocity", description: "Уменьшение отбрасывания от ударов", icon: "Wind" },
      { name: "AutoClicker", description: "Автоматические клики с регулируемой скоростью", icon: "MousePointerClick" },
      { name: "Reach", description: "Увеличение дальности атаки", icon: "Move" },
    ]
  },
  {
    id: "visuals",
    category: "Visuals",
    icon: "Eye",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50",
    emoji: "👁️",
    features: [
      { name: "ESP / Wallhack", description: "Видимость игроков сквозь стены", icon: "Scan" },
      { name: "Tracers", description: "Линии к противникам", icon: "TrendingUp" },
      { name: "Chest ESP", description: "Показ сундуков и предметов", icon: "Package" },
      { name: "Fullbright", description: "Полная яркость в темноте", icon: "Sun" },
      { name: "X-Ray", description: "Прозрачность блоков для поиска руды", icon: "Eye" },
      { name: "Nametags", description: "Отображение имён и здоровья игроков", icon: "Tag" },
    ]
  },
  {
    id: "movement",
    category: "Movement",
    icon: "Zap",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50",
    emoji: "⚡",
    features: [
      { name: "Fly", description: "Полёт в любом направлении", icon: "Plane" },
      { name: "Speed", description: "Увеличение скорости передвижения", icon: "Gauge" },
      { name: "NoClip", description: "Прохождение сквозь блоки", icon: "Ghost" },
      { name: "Spider", description: "Лазание по стенам", icon: "Mountain" },
      { name: "Jesus", description: "Ходьба по воде", icon: "Waves" },
      { name: "Step", description: "Моментальный подъём на блоки", icon: "ArrowUp" },
    ]
  },
  {
    id: "stealth",
    category: "Stealth",
    icon: "Ghost",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50",
    emoji: "🥷",
    features: [
      { name: "AntiCheat Bypass", description: "Защита от обнаружения", icon: "ShieldCheck" },
      { name: "Stealth Mode", description: "Скрытие активных функций", icon: "EyeOff" },
      { name: "Panic Key", description: "Мгновенное отключение", icon: "AlertTriangle" },
      { name: "Stream Proof", description: "Защита от обнаружения на стримах", icon: "Video" },
      { name: "AntiKick", description: "Защита от кика с сервера", icon: "Shield" },
      { name: "Freecam", description: "Свободная камера без движения персонажа", icon: "Camera" },
    ]
  }
]

export function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState("combat")

  const activeCategoryData = featureCategories.find(cat => cat.id === activeCategory) || featureCategories[0]

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
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-3xl">⚡</span>
            <span className="text-purple-300 font-bold">Полный арсенал</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Каждая{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              детали
            </span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-medium">
            🐺 Невидимая защита от античитов в каждой функции
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {featureCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} border-2 ${category.borderColor} text-white shadow-xl`
                  : 'bg-zinc-900/50 border-2 border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-600'
              }`}
            >
              <span className="text-2xl">{category.emoji}</span>
              <span>{category.category}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategoryData.features.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
                className={`relative bg-gradient-to-br ${activeCategoryData.color} backdrop-blur-xl border-2 ${activeCategoryData.borderColor} rounded-3xl p-8 overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-10 -right-10 text-9xl opacity-5 group-hover:opacity-10 transition-opacity">{activeCategoryData.emoji}</div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.4 } }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeCategoryData.color} border-2 ${activeCategoryData.borderColor} flex items-center justify-center shadow-lg`}
                    >
                      <Icon name={feature.icon} className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-200 transition-colors">{feature.name}</h3>
                  <p className="text-zinc-300 leading-relaxed font-medium text-sm">{feature.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                    <Icon name="Check" className="w-4 h-4 text-green-400" />
                    <span>Minecraft 1.16.5+</span>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
