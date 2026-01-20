import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  plan?: {
    name: string
    price: string
    period: string
    description: string
  }
}

const plans = [
  {
    name: "1 Неделя",
    price: 799,
    period: "неделя",
    discount: null
  },
  {
    name: "2 Недели",
    price: 1499,
    period: "2 недели",
    discount: "Скидка 6%"
  },
  {
    name: "1 Месяц",
    price: 1999,
    period: "месяц",
    discount: "Скидка 20%"
  }
]

export function PurchaseModal({ isOpen, onClose, plan: initialPlan }: PurchaseModalProps) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(initialPlan ? 
    plans.findIndex(p => p.name === initialPlan.name) : 0)
  const [email, setEmail] = useState("")
  const [nickname, setNickname] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const selectedPlan = plans[selectedPlanIndex]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    alert(`Спасибо! Подписка для ${nickname} будет активирована после оплаты. Ссылка отправлена на ${email}`)
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
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
                
                <div className="relative p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center transition-colors group"
                  >
                    <Icon name="X" className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  </button>

                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 mb-4">
                      <img 
                        src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
                        alt="KAGE" 
                        className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
                      />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-1">
                      Выбери тариф
                    </h2>
                    <p className="text-zinc-400 text-sm font-medium">
                      Мгновенная активация после оплаты
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="2"
                        value={selectedPlanIndex}
                        onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #9333ea 0%, #9333ea ${(selectedPlanIndex / 2) * 100}%, #27272a ${(selectedPlanIndex / 2) * 100}%, #27272a 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-3">
                        {plans.map((plan, idx) => (
                          <button
                            key={plan.name}
                            onClick={() => setSelectedPlanIndex(idx)}
                            className={`flex flex-col items-center transition-all ${
                              selectedPlanIndex === idx ? 'scale-110' : 'scale-90 opacity-50'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 mb-1 ${
                              selectedPlanIndex === idx
                                ? 'border-purple-400 bg-purple-500'
                                : 'border-zinc-600 bg-zinc-800'
                            }`} />
                            <span className="text-xs font-bold text-zinc-400">{plan.name.split(' ')[0]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      key={selectedPlanIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-5 text-center"
                    >
                      {selectedPlan.discount && (
                        <div className="inline-block bg-green-500/20 border border-green-400/50 text-green-300 text-xs font-bold px-3 py-1 rounded-lg mb-2">
                          {selectedPlan.discount}
                        </div>
                      )}
                      <div className="text-sm text-zinc-300 font-medium mb-1">{selectedPlan.name}</div>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                          {selectedPlan.price}
                        </span>
                        <span className="text-zinc-300 font-bold text-xl">₽</span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-1">за {selectedPlan.period}</div>
                    </motion.div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nickname" className="block text-xs font-bold text-white mb-2">
                        Minecraft никнейм
                      </label>
                      <input
                        type="text"
                        id="nickname"
                        required
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Steve"
                        className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-white mb-2">
                        Email для активации
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors font-medium text-sm"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isProcessing}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-black text-base rounded-2xl shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
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
                            Оплатить {selectedPlan.price} ₽
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </form>

                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" className="w-3 h-3 text-green-400" />
                      Безопасно
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Lock" className="w-3 h-3 text-blue-400" />
                      SSL
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Zap" className="w-3 h-3 text-yellow-400" />
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