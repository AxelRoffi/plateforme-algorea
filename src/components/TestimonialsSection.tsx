'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'Professeure de Mathématiques',
    company: 'Lycée Victor Hugo',
    content: 'Algoréa a transformé la façon dont j\'enseigne. Mes étudiants sont plus engagés et leurs résultats se sont considérablement améliorés. L\'interface est intuitive et les outils d\'analyse m\'aident à adapter mon enseignement.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Jean-Pierre Martin',
    role: 'Directeur Pédagogique',
    company: 'École Supérieure de Commerce',
    content: 'Nous avons migré vers Algoréa il y a 6 mois et c\'est la meilleure décision que nous ayons prise. La plateforme est stable, sécurisée et nos enseignants l\'adorent. Le support client est exceptionnel.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Sophie Lefebvre',
    role: 'Formatrice en Entreprise',
    company: 'TechCorp Formation',
    content: 'L\'intégration avec nos outils existants a été transparente. Les fonctionnalités d\'IA personnalisée ont permis à nos employés d\'apprendre à leur rythme. Un investissement qui se rentabilise rapidement.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ce que disent nos utilisateurs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez pourquoi plus de 50,000 éducateurs font confiance à Algoréa 
            pour transformer leur approche de l&apos;enseignement.
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
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
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 mr-4 flex items-center justify-center text-white font-semibold">
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
              Ils nous font déjà confiance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              'Université Paris-Sorbonne',
              'Sciences Po',
              'École Polytechnique',
              'HEC Paris',
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
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Rejoignez des milliers d&apos;éducateurs satisfaits
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Commencez votre essai gratuit aujourd&apos;hui et découvrez comment Algoréa 
              peut transformer votre approche de l&apos;enseignement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Essai gratuit 14 jours
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