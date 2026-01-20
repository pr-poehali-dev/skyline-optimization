import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const securityFeatures = [
  {
    icon: "ShieldCheck",
    title: "Японская философия скрытности",
    description: "Как тень ниндзя — незаметен для античитов. Технология KAGE обеспечивает полную невидимость.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: "Lock",
    title: "Kernel-level защита",
    description: "Работа на уровне ядра системы с обходом всех современных античитов, включая Easy Anti-Cheat и BattlEye.",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: "Zap",
    title: "Мгновенное отключение",
    description: "Panic Key — мгновенная деактивация всех функций при обнаружении подозрительной активности.",
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    icon: "Eye",
    title: "Stream Proof режим",
    description: "Полная невидимость на записи и стримах. Никаких следов в OBS, Discord и других программах.",
    color: "from-pink-500/20 to-pink-600/20"
  }
]

const stats = [
  { value: "0", label: "банов за месяц", icon: "Ban" },
  { value: "24/7", label: "обновления защиты", icon: "RefreshCw" },
  { value: "5000+", label: "активных пользователей", icon: "Users" },
  { value: "99.9%", label: "uptime серверов", icon: "Server" }
]

export function SecuritySection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="Shield" className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Невидимая защита</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Технология <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">KAGE</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Наша система защиты основана на японской философии невидимости. Ты всегда на шаг впереди античитов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br ${feature.color} backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group cursor-pointer`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Icon name={stat.icon} className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
