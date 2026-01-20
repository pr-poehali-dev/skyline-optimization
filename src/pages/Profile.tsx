import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function Profile() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#09090B" }}>
      <Navbar />
      
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Профиль <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">пользователя</span>
              </h1>
              <p className="text-zinc-400 text-lg">Управление подпиской и настройками</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 border-2 border-purple-500/30 rounded-3xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 flex items-center justify-center">
                    <Icon name="User" className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">Steve</h2>
                    <p className="text-zinc-400 text-sm">steve@example.com</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-zinc-400 text-sm">Статус лицензии</span>
                    <span className="text-green-400 font-bold text-sm flex items-center gap-2">
                      <Icon name="CheckCircle" className="w-4 h-4" />
                      Активна
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-zinc-400 text-sm">Тариф</span>
                    <span className="text-purple-400 font-bold text-sm">1 Месяц</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="text-zinc-400 text-sm">Истекает</span>
                    <span className="text-zinc-300 font-bold text-sm">15 февраля 2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 border-2 border-purple-500/30 rounded-3xl p-6">
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="Download" className="w-5 h-5 text-purple-400" />
                  Скачать KAGE
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Версия 2.1.5 • Обновлено 18 января 2026
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2">
                  <Icon name="Download" className="w-5 h-5" />
                  Скачать клиент
                </button>
                
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-300 text-xs flex items-start gap-2">
                    <Icon name="Info" className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Убедитесь, что антивирус отключен перед установкой
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 border-2 border-purple-500/30 rounded-3xl p-6 mb-8">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="Settings" className="w-5 h-5 text-purple-400" />
                Настройки аккаунта
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Minecraft никнейм</label>
                  <input
                    type="text"
                    value="Steve"
                    disabled
                    className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-zinc-500 font-medium cursor-not-allowed"
                  />
                  <p className="text-zinc-500 text-xs mt-1">Никнейм нельзя изменить после привязки</p>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Email</label>
                  <input
                    type="email"
                    value="steve@example.com"
                    className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors font-medium"
                  />
                </div>
                
                <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all">
                  Сохранить изменения
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-900/30 to-zinc-900/50 border border-purple-500/30 rounded-2xl p-6 text-center">
                <Icon name="Shield" className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Защита активна</h4>
                <p className="text-zinc-400 text-sm">Античит обход работает</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/30 to-zinc-900/50 border border-green-500/30 rounded-2xl p-6 text-center">
                <Icon name="Zap" className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Онлайн</h4>
                <p className="text-zinc-400 text-sm">Все системы работают</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/30 to-zinc-900/50 border border-blue-500/30 rounded-2xl p-6 text-center">
                <Icon name="Users" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">5000+</h4>
                <p className="text-zinc-400 text-sm">Активных пользователей</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
