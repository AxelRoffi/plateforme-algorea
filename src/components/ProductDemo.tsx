'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react'
import { motion } from 'framer-motion'

const screenshots = [
  {
    title: 'Tableau de bord principal',
    description: 'Vue d\'ensemble complète de vos cours et performances',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'Analytics avancés',
    description: 'Suivez les progrès et performances en temps réel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
]

export default function ProductDemo() {
  const [activeDevice, setActiveDevice] = useState('desktop')
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Découvrez Algoréa en action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Explorez notre interface intuitive et découvrez comment Algoréa simplifie 
            la gestion de l&apos;apprentissage sur tous vos appareils.
          </motion.p>

          {/* Device selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-8"
          >
            {[
              { id: 'desktop', icon: Monitor, label: 'Desktop' },
              { id: 'tablet', icon: Tablet, label: 'Tablet' },
              { id: 'mobile', icon: Smartphone, label: 'Mobile' },
            ].map((device) => {
              const Icon = device.icon
              return (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeDevice === device.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {device.label}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Main demo area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Screenshots sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeScreenshot === index
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-700'
                    : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveScreenshot(index)}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {screenshot.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main preview */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Device frame */}
              <div
                className={`relative mx-auto ${
                  activeDevice === 'desktop'
                    ? 'max-w-4xl'
                    : activeDevice === 'tablet'
                    ? 'max-w-md'
                    : 'max-w-xs'
                }`}
              >
                <div
                  className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden ${
                    activeDevice === 'mobile' ? 'aspect-[9/16]' : 'aspect-video'
                  }`}
                >
                  {/* Mock browser bar for desktop */}
                  {activeDevice === 'desktop' && (
                    <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          app.plateforme-algorea.com
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Screenshot content */}
                  <div className="relative h-full">
                    <div 
                      className="w-full h-full bg-primary-600 flex items-center justify-center text-white"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2">{screenshots[activeScreenshot].title}</div>
                        <div className="text-lg opacity-80">{screenshots[activeScreenshot].description}</div>
                      </div>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Play className="w-6 h-6 mr-2" />
                        Voir la démo interactive
                      </Button>
                    </div>

                    {/* Feature highlights */}
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Nouveau
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-2 rounded-lg">
                      <div className="text-xs font-medium text-gray-900 dark:text-white">
                        IA Intégrée
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: '99.9%', label: 'Temps de disponibilité' },
            { value: '< 200ms', label: 'Temps de réponse' },
            { value: '24/7', label: 'Support technique' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}