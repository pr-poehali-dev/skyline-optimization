import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

export function AuthSection() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nickname, setNickname] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(isLogin ? `Вход выполнен для ${email}` : `Регистрация прошла успешно! Проверьте ${email}`)
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Присоединяйся к <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">элите</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Создай аккаунт и получи доступ к самому мощному читу для Hytale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/50 flex items-center justify-center flex-shrink-0">
                <Icon name="Crown" className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Стань непобедимым</h3>
                <p className="text-zinc-400">Все функции чита в одном аккаунте. KillAura, Fly, ESP, X-Ray и многое другое.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/50 flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Комьюнити 5000+ игроков</h3>
                <p className="text-zinc-400">Общайся с другими игроками, делись тактиками, получай помощь 24/7.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/50 flex items-center justify-center flex-shrink-0">
                <Icon name="Rocket" className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Мгновенная активация</h3>
                <p className="text-zinc-400">После покупки получи доступ к читу за 60 секунд. Никаких ожиданий.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-600/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center bg-zinc-900/50 border border-zinc-700 rounded-full p-1">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                        isLogin
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Вход
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                        !isLogin
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Регистрация
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <div>
                      <label htmlFor="nickname" className="block text-sm font-bold text-white mb-2">
                        Minecraft никнейм
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="nickname"
                          required={!isLogin}
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          placeholder="Steve"
                          className="w-full px-4 py-3 pl-12 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                        />
                        <Icon name="User" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="auth-email" className="block text-sm font-bold text-white mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="auth-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 pl-12 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                      />
                      <Icon name="Mail" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="auth-password" className="block text-sm font-bold text-white mb-2">
                      Пароль
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="auth-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 pl-12 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                      />
                      <Icon name="Lock" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-black text-base rounded-xl shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                  >
                    {isLogin ? 'Войти в аккаунт' : 'Создать аккаунт'}
                  </motion.button>
                </form>

                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-400">
                  <Icon name="Shield" className="w-4 h-4 text-green-400" />
                  <span>Безопасное соединение SSL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
