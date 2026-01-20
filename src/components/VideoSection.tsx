import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function VideoSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="Video" className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Смотри в действии</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KAGE в <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">реальной игре</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Полная демонстрация всех возможностей чита. Невидимый для античитов, мощный для побед.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 bg-black/50 backdrop-blur-sm">
            <div className="aspect-video relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="KAGE Cheat Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-600/30 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-zinc-900/50 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto mb-4">
              <Icon name="Eye" className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Полная невидимость</h3>
            <p className="text-zinc-400 text-sm">Обходит все античиты Hytale</p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/30 to-zinc-900/50 border border-pink-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/50 flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Мгновенная реакция</h3>
            <p className="text-zinc-400 text-sm">KillAura, AutoClicker, Velocity</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-zinc-900/50 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Безопасность</h3>
            <p className="text-zinc-400 text-sm">Регулярные обновления защиты</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
