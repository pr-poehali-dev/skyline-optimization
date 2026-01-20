import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: string
    period: string
    description: string
  }
}

export function PurchaseModal({ isOpen, onClose, plan }: PurchaseModalProps) {
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    alert(`Спасибо! Ссылка на оплату отправлена на ${email}`)
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
                      <span className="text-4xl">🛒</span>
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2">
                      Покупка подписки
                    </h2>
                    <p className="text-zinc-400 font-medium">
                      {plan.description}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-300 font-medium">Тариф:</span>
                      <span className="text-white font-black text-xl">{plan.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 font-medium">Стоимость:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-white font-black text-3xl">{plan.price}</span>
                        <span className="text-zinc-300 font-bold">₽</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-3">
                        📧 Email для активации
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
                      <p className="text-xs text-zinc-400 mt-2">
                        На этот email придёт ссылка для оплаты и ключ активации
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isProcessing}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isProcessing ? (
                          <>
                            <Icon name="Loader" className="w-5 h-5 animate-spin" />
                            Обработка...
                          </>
                        ) : (
                          <>
                            <Icon name="CreditCard" className="w-5 h-5" />
                            Перейти к оплате
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </form>

                  <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" className="w-4 h-4 text-green-400" />
                      Безопасно
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Lock" className="w-4 h-4 text-blue-400" />
                      SSL шифрование
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Zap" className="w-4 h-4 text-yellow-400" />
                      Моментально
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
