'use client'

import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const navigation = {
  product: [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Démo', href: '#demo' },
    { name: 'Intégrations', href: '#integrations' },
  ],
  company: [
    { name: 'À propos', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Carrières', href: '#careers' },
    { name: 'Presse', href: '#press' },
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Guides', href: '#guides' },
    { name: 'Webinaires', href: '#webinars' },
    { name: 'Communauté', href: '#community' },
  ],
  support: [
    { name: 'Centre d\'aide', href: '#help' },
    { name: 'Statut', href: '#status' },
    { name: 'Contact', href: '#contact' },
    { name: 'Formation', href: '#training' },
  ],
  legal: [
    { name: 'Confidentialité', href: '#privacy' },
    { name: 'Conditions', href: '#terms' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'RGPD', href: '#gdpr' },
  ],
}

const social = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                Plateforme Algoréa
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              La plateforme d&apos;apprentissage nouvelle génération qui transforme 
              l&apos;éducation grâce à l&apos;intelligence artificielle et des outils 
              intuitifs conçus pour les éducateurs modernes.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">contact@plateforme-algorea.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                <span className="text-sm">
                  42 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Restez informé des nouveautés
              </h3>
              <p className="text-gray-300 text-sm">
                Recevez les dernières mises à jour, conseils pédagogiques et 
                nouvelles fonctionnalités directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium whitespace-nowrap">
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2024 Plateforme Algoréa. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {social.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Certifié</div>
              <div className="text-sm font-medium">ISO 27001</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Conforme</div>
              <div className="text-sm font-medium">RGPD</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Sécurité</div>
              <div className="text-sm font-medium">SOC 2 Type II</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Hébergement</div>
              <div className="text-sm font-medium">France</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}