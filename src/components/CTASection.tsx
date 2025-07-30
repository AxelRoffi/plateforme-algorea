'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="about" className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformez l&apos;éducation
            <br />
            <span className="text-yellow-300">
              dès aujourd&apos;hui
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour découvrir comment notre plateforme LMS innovante 
            peut s'adapter à vos contenus les plus ambitieux. Une équipe dédiée 
            vous accompagne pour réaliser vos projets éducatifs sans limites.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              'Démo personnalisée',
              'Équipe technique dédiée',
              'Support 24/7 inclus',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-white/90"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4 group"
            >
              Demander une démo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Planifier une démo personnalisée
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80"
          >
            <div className="flex items-center">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2">700,000+ participants/an</span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-3">50+ pays utilisateurs</span>
            </div>
          </motion.div>

          {/* Security badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 opacity-60"
          >
            {[
              'RGPD Conforme',
              'ISO 27001',
              'SOC 2 Type II',
              'Chiffrement 256-bit',
            ].map((badge) => (
              <div key={badge} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-white/80">{badge}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}