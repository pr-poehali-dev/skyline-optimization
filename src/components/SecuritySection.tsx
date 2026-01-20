import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const securityFeatures = [
  {
    icon: "ShieldCheck",
    title: "🥷 Японская философия скрытности",
    description: "Как тень ниндзя — незаметен для античитов. Технология KAGE обеспечивает полную невидимость.",
    color: "from-purple-500/30 to-purple-600/30",
    emoji: "🌙"
  },
  {
    icon: "Lock",
    title: "🔒 Kernel-level защита",
    description: "Работа на уровне ядра системы с обходом всех современных античитов, включая Easy Anti-Cheat и BattlEye.",
    color: "from-blue-500/30 to-blue-600/30",
    emoji: "⚡"
  },
  {
    icon: "Zap",
    title: "⚡ Мгновенное отключение",
    description: "Panic Key — мгновенная деактивация всех функций при обнаружении подозрительной активности.",
    color: "from-cyan-500/30 to-cyan-600/30",
    emoji: "💨"
  },
  {
    icon: "Eye",
    title: "👁️ Stream Proof режим",
    description: "Полная невидимость на записи и стримах. Никаких следов в OBS, Discord и других программах.",
    color: "from-pink-500/30 to-pink-600/30",
    emoji: "👻"
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
    <section id="security" className="relative py-32 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <img 
              src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
              alt="Wolf" 
              className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
            />
            <span className="text-purple-300 font-bold">Невидимая защита</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Технология{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">KAGE</span>
          </h2>
          <p className="text-zinc-300 text-xl max-w-3xl mx-auto font-medium">Наша система защиты основана на японской философии невидимости.
Ты всегда на шаг впереди античитов.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.08, y: -10, rotateZ: 2, transition: { duration: 0.2 } }}
              className={`relative bg-gradient-to-br ${feature.color} backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 overflow-hidden group cursor-pointer shadow-2xl hover:shadow-purple-500/50`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 text-7xl opacity-5 group-hover:opacity-10 transition-opacity">{feature.emoji}</div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.4 } }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 flex items-center justify-center mb-6 shadow-lg"
                >
                  <Icon name={feature.icon} className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-200 transition-colors">{feature.title}</h3>
                <p className="text-zinc-300 leading-relaxed font-medium">{feature.description}</p>
              </div>

              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:rotate-90 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.15, rotateY: 10, transition: { duration: 0.2 } }}
              className="relative text-center p-8 bg-gradient-to-br from-zinc-900/80 to-purple-900/20 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl shadow-xl hover:shadow-purple-500/50 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-center mb-4 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, transition: { duration: 0.4 } }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/40 flex items-center justify-center shadow-lg"
                >
                  <Icon name={stat.icon} className="w-7 h-7 text-purple-300" />
                </motion.div>
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2 relative z-10">{stat.value}</div>
              <div className="text-sm text-zinc-300 font-medium relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}