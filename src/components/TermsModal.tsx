import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import Icon from "@/components/ui/icon"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl z-10 max-h-[80vh] overflow-y-auto"
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-purple-500/50 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10" />
              
              <div className="relative p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center transition-colors group z-10"
                >
                  <Icon name="X" className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                </button>

                <div className="mb-6">
                  <h2 className="text-3xl font-black text-white mb-2">Условия использования</h2>
                  <p className="text-zinc-400 text-sm">Последнее обновление: 20 января 2026</p>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">1. Принятие условий</h3>
                    <p className="text-sm leading-relaxed">
                      Используя программное обеспечение KAGE, вы соглашаетесь с настоящими условиями использования. 
                      Если вы не согласны с условиями, не используйте наш продукт.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">2. Лицензия и использование</h3>
                    <p className="text-sm leading-relaxed mb-2">
                      KAGE предоставляет вам ограниченную, неисключительную, непередаваемую лицензию на использование программного обеспечения.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Запрещена передача аккаунта третьим лицам</li>
                      <li>Запрещен реверс-инжиниринг программы</li>
                      <li>Лицензия действует только на период оплаченной подписки</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">3. Ограничение ответственности</h3>
                    <p className="text-sm leading-relaxed">
                      KAGE не несет ответственности за блокировки аккаунтов в игре. Используя читы, вы нарушаете правила игры 
                      и действуете на свой страх и риск.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">4. Изменение условий</h3>
                    <p className="text-sm leading-relaxed">
                      Мы оставляем за собой право изменять условия использования в любое время. Продолжение использования 
                      после изменений означает ваше согласие с новыми условиями.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
