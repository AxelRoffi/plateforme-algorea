'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Skolar by Probabl',
    role: 'Plateforme de formation',
    company: 'skolar.probabl.ai',
    content: 'Plateforme de formation en data science développée avec notre technologie. Un exemple concret d\'adaptation de notre LMS pour des besoins spécifiques en formation professionnelle.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    link: 'https://skolar.probabl.ai/en/a/home;pa=0',
  },
  {
    name: 'Concours Castor',
    role: 'Concours international',
    company: 'France-IOI',
    content: 'Plus de 700,000 participants par an dans plus de 50 pays. Notre plateforme gère avec succès des événements éducatifs de grande envergure avec une fiabilité éprouvée.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Clients internationaux',
    role: 'Déploiements enterprise',
    company: 'Divers secteurs',
    content: 'Intégration SSO enterprise, gestion de millions d\'utilisateurs, adaptation à des contextes pédagogiques variés. Une technologie éprouvée qui s\'adapte à tous les besoins.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Références et déploiements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez des exemples concrets d'utilisation de notre technologie 
            dans différents contextes éducatifs et professionnels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800 relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary-600" />
                </div>
                
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                    {testimonial.link && (
                      <div className="mt-3">
                        <a 
                          href={testimonial.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm underline"
                        >
                          Voir la plateforme →
                        </a>
                      </div>
                    )}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 mr-4 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Projets basés sur notre technologie
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              'France-IOI',
              'GitHub Open Source',
              'Concours Castor',
              'Skolar by Probabl',
            ].map((institution) => (
              <div key={institution} className="text-center">
                <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-semibold text-xs">
                    {institution.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {institution}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Rejoignez des milliers d&apos;éducateurs satisfaits
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Commencez votre essai aujourd&apos;hui et découvrez comment Algoréa 
              peut transformer votre approche de l&apos;enseignement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Essai 14 jours
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                Planifier une démo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}