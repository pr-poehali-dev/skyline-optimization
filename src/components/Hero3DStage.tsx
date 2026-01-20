import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./DashboardMockup"
import { Navbar } from "./Navbar"
import { FeaturesSection } from "./FeaturesSection"
import { SecuritySection } from "./SecuritySection"
import { PricingSection } from "./PricingSection"
import { CTASection } from "./CTASection"
import { Footer } from "./Footer"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Anime-style glows */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1400px",
            height: "1000px",
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "5%",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "20%",
            left: "10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm"
              >
                <img 
                  src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
                  alt="Wolf" 
                  className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
                />
                <span className="text-purple-300 font-bold text-sm tracking-wide">Твой хищник в Hytale</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] text-balance"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">KAGE</span>
                {" "}—{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                  тень, которая всегда с тобой
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-8 text-xl text-zinc-300 font-medium max-w-3xl"
              >
                🐺 Премиальный чит для Hytale с <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">невидимой защитой</span> от античитов.
                <br />
                ⚡ Японская философия скрытности в каждой функции.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">🔥 Купить подписку</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
                <div className="flex items-center gap-3 text-zinc-300">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-medium">Обновление:</span>
                  <span className="text-purple-400 font-bold">Stealth Mode 2.0</span>
                  <span>✨</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3D Stage - full bleed */}
          <div
            className="relative mt-16"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "relative",
              left: "50%",
              right: "50%",
              height: "700px",
              marginTop: "-60px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #09090B 20%, transparent 100%)",
              }}
            />

            {/* Perspective container */}
            <div
              style={{
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.1s ease-out",
                contain: "strict",
                perspective: "4000px",
                perspectiveOrigin: "100% 0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Transformed base */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: "#09090B",
                  transformOrigin: "0 0",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  width: "1600px",
                  height: "900px",
                  margin: "280px auto auto",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>

          <FeaturesSection />
          <SecuritySection />
          <PricingSection />
          <CTASection />
          <Footer />
        </div>
      </section>
    </>
  )
}