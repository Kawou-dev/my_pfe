"use client"

import Link from "next/link"
import { CheckIcon, Menu, X } from "lucide-react"
import { useState } from "react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:w-full w-full flex items-center justify-between py-6 px-8 shadow-md bg-white sticky top-0 z-10">
      
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-lg hover:text-gray-600 px-3">
            Accueil
          </Link>
          <Link href="#tarifs" className="text-lg hover:text-gray-600 px-3">
            Blog
          </Link>
          <Link href="#tarifs" className="text-lg hover:text-gray-600 px-3">
            Contact
          </Link>
         
         
        </nav>

        <div className="hidden md:flex items-center gap-4">
        <Link
            href="/register"
            className="text-lg border border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-md font-medium"
          >
            S'inscrire
          </Link>
          <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md font-medium">
           Se connecter
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden  ">
          <button className="p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>



        
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-md py-4 px-8 absolute top-[78px] z-10 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#fonctionnalites"
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
             <Link href="#tarifs" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
             Blog
            </Link>
            <Link href="#tarifs" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
             Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                href="/register"
                className="text-lg border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
              </Link>
              <Link
                href="/login"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Essayez maintenant
              </Link>
            </div>
          </nav>
        </div>
      )}





















      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:py-24 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* <div className="flex items-center mb-6">
              <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
            </div> */}
            <h1 className="text-5xl  font-bold mb-6 leading-tight">ENFIN PLUS DE CONTROLE DANS VOTRE VIE</h1>
            <p className="text-xl  mb-8 text-gray-700">La meilleure manière de prédire le futur est de le planifier </p>
            <Link
              href="/login"
              className="bg-red-600 ml-11  hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium inline-block"
            >
              Essayez maintenant
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto max-w-md">
              <div className="border-8 border-black rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-white pt-4">
                  <div className="bg-gray-100 p-4 rounded-t-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Aujourd'hui</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-400"></div>
                        <span>Lemeur</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-400"></div>
                        <span>Travail</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-400"></div>
                        <span>Déverté un yet projet</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-400"></div>
                        <span>Tinnail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 border-8 border-black rounded-3xl overflow-hidden shadow-xl transform rotate-6">
                <div className="bg-white p-2">
                  <div className="text-xs font-medium mb-1">Moritalia!</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                      <span className="text-xs">Yannot</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                      <span className="text-xs">sonnoionneuto</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <div>Cuita I</div>
                    <div className="text-red-500">Avancé Fini</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">👋 Ce que vous pouvez faire :</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold mb-4">Ajouter rapidement des tâches</h3>
              <p className="text-gray-700">Creez des dates en quelquese</p>
            </div>
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold mb-4">Créer des tâches avec des echeances</h3>
              <p className="text-gray-700">Définissez dos dates limites pres</p>
            </div>
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold mb-4">Recevoir des rappels intelligents</h3>
              <p className="text-gray-700">No mangez nemais une échéance</p>
            </div>
          </div>
        </section>

        {/* Organization Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">🌱 Organisez tout, simplement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 p-8 rounded-lg shadow-lg bg-white">
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Projets pour séparer études, vacances, tâches</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Priorités & étiquettes</p>
              </div>
            </div>
            <div className="space-y-6 p-8 rounded-lg shadow-lg bg-white">
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Vue «Aujourd'hui» & «Prochainement»</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Filtres intelligents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">🔗 Collaborez facilement avec d'autres</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Partage de projets & assignation</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckIcon className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Commentaires à fichiers dans les taches</p>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">📊 Suivez vos progrès</h2>
        </section>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">LOGO</div>
          <div className="text-xl font-medium mb-4 md:mb-0">Prêt à organiser votre vie ?</div>
          <div className="flex items-center gap-6">
            <Link href="#mentions" className="text-gray-600 hover:text-gray-900">
              Mentions légales
            </Link>
            <Link href="#facebook" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
