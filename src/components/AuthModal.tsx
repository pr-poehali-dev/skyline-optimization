import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'login' | 'register'
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsProcessing(false)
    alert(mode === 'login' ? 'Вход выполнен!' : 'Регистрация завершена!')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md"
            >
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-purple-500/50 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px]" />
                
                <div className="relative p-8">
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center transition-colors group"
                  >
                    <Icon name="X" className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                  </button>

                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 mb-6">
                      <img 
                        src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
                        alt="KAGE" 
                        className="w-12 h-12 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
                      />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2">
                      {mode === 'login' ? 'Вход в KAGE' : 'Регистрация'}
                    </h2>
                    <p className="text-zinc-400 font-medium">
                      {mode === 'login' ? 'Добро пожаловать обратно' : 'Присоединяйся к тени'}
                    </p>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <button
                      onClick={() => setMode('login')}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        mode === 'login'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-zinc-800/50 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Вход
                    </button>
                    <button
                      onClick={() => setMode('register')}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        mode === 'register'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-zinc-800/50 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Регистрация
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {mode === 'register' && (
                      <div>
                        <label htmlFor="username" className="block text-sm font-bold text-white mb-2">
                          Никнейм
                        </label>
                        <input
                          type="text"
                          id="username"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="YourNickname"
                          className="w-full px-5 py-4 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-bold text-white mb-2">
                        Пароль
                      </label>
                      <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-5 py-4 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium"
                      />
                    </div>

                    {mode === 'login' && (
                      <div className="flex justify-end">
                        <button type="button" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                          Забыли пароль?
                        </button>
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isProcessing}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mt-6"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isProcessing ? (
                          <>
                            <Icon name="Loader" className="w-5 h-5 animate-spin" />
                            Обработка...
                          </>
                        ) : (
                          <>
                            <Icon name={mode === 'login' ? 'LogIn' : 'UserPlus'} className="w-5 h-5" />
                            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" className="w-4 h-4 text-green-400" />
                      Безопасно
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Lock" className="w-4 h-4 text-blue-400" />
                      Шифрование
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
