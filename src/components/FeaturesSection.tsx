import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const allFeatures = [
  { 
    name: "Aimbot", 
    description: "Автоматическое наведение на противников", 
    icon: "Target",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Triggerbot", 
    description: "Автоматическая стрельба при наведении", 
    icon: "Crosshair",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Kill Aura", 
    description: "Автоматическая атака вокруг персонажа", 
    icon: "Swords",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Velocity", 
    description: "Уменьшение отбрасывания от ударов", 
    icon: "Wind",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "AutoClicker", 
    description: "Автоматические клики с регулируемой скоростью", 
    icon: "MousePointerClick",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Reach", 
    description: "Увеличение дальности атаки", 
    icon: "Move",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "ESP / Wallhack", 
    description: "Видимость игроков сквозь стены", 
    icon: "Scan",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Tracers", 
    description: "Линии к противникам", 
    icon: "TrendingUp",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Chest ESP", 
    description: "Показ сундуков и предметов", 
    icon: "Package",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Fullbright", 
    description: "Полная яркость в темноте", 
    icon: "Sun",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "X-Ray", 
    description: "Прозрачность блоков для поиска руды", 
    icon: "Eye",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Nametags", 
    description: "Отображение имён и здоровья игроков", 
    icon: "Tag",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Fly", 
    description: "Полёт в любом направлении", 
    icon: "Plane",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Speed", 
    description: "Увеличение скорости передвижения", 
    icon: "Gauge",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "NoClip", 
    description: "Прохождение сквозь блоки", 
    icon: "Ghost",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Spider", 
    description: "Лазание по стенам", 
    icon: "Mountain",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Jesus", 
    description: "Ходьба по воде", 
    icon: "Waves",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Step", 
    description: "Моментальный подъём на блоки", 
    icon: "ArrowUp",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "AntiCheat Bypass", 
    description: "Защита от обнаружения", 
    icon: "ShieldCheck",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "Stealth Mode", 
    description: "Скрытие активных функций", 
    icon: "EyeOff",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "Panic Key", 
    description: "Мгновенное отключение", 
    icon: "AlertTriangle",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "Stream Proof", 
    description: "Защита от обнаружения на стримах", 
    icon: "Video",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "AntiKick", 
    description: "Защита от кика с сервера", 
    icon: "Shield",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "Freecam", 
    description: "Свободная камера без движения персонажа", 
    icon: "Camera",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "Critical Hits", 
    description: "Автоматические критические удары", 
    icon: "Zap",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Auto Armor", 
    description: "Автоматическое надевание брони", 
    icon: "ShieldAlert",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Auto Potion", 
    description: "Автоматическое использование зелий", 
    icon: "Droplet",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Chams", 
    description: "Подсветка игроков цветом", 
    icon: "Palette",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "Radar", 
    description: "Мини-карта с противниками", 
    icon: "Radar",
    category: "Visuals",
    color: "from-purple-500/30 to-pink-500/30",
    borderColor: "border-purple-400/50"
  },
  { 
    name: "NoFall", 
    description: "Защита от урона при падении", 
    icon: "ArrowDown",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Long Jump", 
    description: "Увеличенная дальность прыжка", 
    icon: "ArrowBigRight",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "Scaffold", 
    description: "Автоматическая постройка мостов", 
    icon: "Blocks",
    category: "World",
    color: "from-green-500/30 to-emerald-500/30",
    borderColor: "border-green-400/50"
  },
  { 
    name: "Auto Mine", 
    description: "Автоматическая добыча ресурсов", 
    icon: "Pickaxe",
    category: "World",
    color: "from-green-500/30 to-emerald-500/30",
    borderColor: "border-green-400/50"
  },
  { 
    name: "Nuker", 
    description: "Быстрое разрушение блоков вокруг", 
    icon: "Bomb",
    category: "World",
    color: "from-green-500/30 to-emerald-500/30",
    borderColor: "border-green-400/50"
  },
  { 
    name: "Auto Tool", 
    description: "Автовыбор лучшего инструмента", 
    icon: "Wrench",
    category: "World",
    color: "from-green-500/30 to-emerald-500/30",
    borderColor: "border-green-400/50"
  },
  { 
    name: "Auto Totem", 
    description: "Автоматическое использование тотема", 
    icon: "Heart",
    category: "Combat",
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "border-red-400/50"
  },
  { 
    name: "Anti Void", 
    description: "Защита от падения в пустоту", 
    icon: "CircleSlash",
    category: "Stealth",
    color: "from-zinc-500/30 to-slate-500/30",
    borderColor: "border-zinc-400/50"
  },
  { 
    name: "HUD Editor", 
    description: "Настройка интерфейса чита", 
    icon: "Settings",
    category: "Interface",
    color: "from-yellow-500/30 to-amber-500/30",
    borderColor: "border-yellow-400/50"
  },
  { 
    name: "Click GUI", 
    description: "Удобное меню настройки функций", 
    icon: "Layout",
    category: "Interface",
    color: "from-yellow-500/30 to-amber-500/30",
    borderColor: "border-yellow-400/50"
  },
  { 
    name: "Inventory Walk", 
    description: "Движение с открытым инвентарём", 
    icon: "Backpack",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
  },
  { 
    name: "No Slow", 
    description: "Отключение замедления", 
    icon: "FastForward",
    category: "Movement",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-blue-400/50"
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
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6"
          >
            <img 
              src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
              alt="KAGE" 
              className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
            />
            <span className="text-purple-300 font-bold">40+ Функций</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Полный{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              арсенал
            </span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-medium">Прокрути список и изучи все возможности</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="mt-8 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-purple-400">
              <span className="text-sm font-medium">Листай вниз</span>
              <Icon name="ChevronDown" className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="h-[600px] overflow-y-auto pr-4 space-y-3 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-zinc-900/50"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#9333ea #18181b'
            }}
          >
            {allFeatures.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                whileHover={{ x: 8, scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative bg-gradient-to-r ${feature.color} backdrop-blur-xl border-2 ${feature.borderColor} rounded-2xl p-5 overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 0.4 } }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} border-2 ${feature.borderColor} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Icon name={feature.icon} className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-black text-lg truncate">
                        {feature.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-white/10 rounded-md text-xs font-bold text-zinc-300 whitespace-nowrap">
                        {feature.category}
                      </span>
                    </div>
                    <p className="text-zinc-300 text-sm font-medium line-clamp-1">
                      {feature.description}
                    </p>
                  </div>

                  <Icon name="ChevronRight" className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-zinc-400 text-sm font-medium">
              И это только базовые возможности — каждая функция имеет множество настроек!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
