import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="max-w-screen-xl w-full mx-auto py-4 px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium hover:text-red-500 transition-colors">Fonctionnalités</a>
          <a href="#pricing" className="font-medium hover:text-red-500 transition-colors">Tarifs</a>
          <a href="#login" className="font-medium hover:text-red-500 transition-colors">Connexion</a>
          <Button className="bg-red-500 hover:bg-red-600 text-white">Essayez gratuitement</Button>
        </nav>
        <Button className="md:hidden bg-red-500 hover:bg-red-600 text-white">Essayez</Button>
      </header>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 ENFIN PLUS DE CLARTÉ</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">50+ millions de personnes organisent leur vie pro & perso</p>
        <Button className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 px-8 rounded-lg mb-12">Essayez gratuitement</Button>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] bg-gray-100 rounded-lg shadow-lg">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Capture d'écran de l'application"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-center px-4">
            📱 Capture d'écran de l'app (desktop + mobile)
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-screen-xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">✅ Ce que vous pouvez faire :</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-3">Ajouter rapidement des tâches</h3>
            <p className="text-gray-600">Créez des tâches en quelques secondes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-3">Créer des tâches avec des échéances</h3>
            <p className="text-gray-600">Définissez des dates limites pour rester organisé</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-3">Recevoir des rappels intelligents</h3>
            <p className="text-gray-600">Ne manquez jamais une échéance importante</p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      {[
        {
          title: "📚 Organisez tout, simplement",
          items: [
            "Projets pour séparer études, vacances, tâches",
            "Priorités & étiquettes",
            "Sous-tâches & sections pour structurer",
          ],
          bg: "",
        },
        {
          title: "📅 Visualisez mieux vos journées",
          items: [
            "Vue \"Aujourd'hui\" & \"Prochainement\"",
            "Filtres intelligents",
          ],
          bg: "bg-gray-50",
        },
        {
          title: "👥 Collaborez facilement avec d'autres",
          items: [
            "Partage de projets & assignation",
            "Commentaires & fichiers dans les tâches",
          ],
          bg: "",
        },
        {
          title: "📈 Suivez vos progrès",
          items: [
            "Historique, productivité et points Karma",
          ],
          bg: "bg-gray-50",
        },
      ].map((section, idx) => (
        <section key={idx} className={`${section.bg} max-w-screen-xl mx-auto py-12 px-4`}>
          <h2 className="text-2xl font-bold text-center mb-8">{section.title}</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-red-500 mr-3 h-6 w-6 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Final CTA */}
      <section className="max-w-screen-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Prêt à organiser votre vie ?</h2>
        <Button className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 px-8 rounded-lg">
          Essayez maintenant
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-bold mb-4 md:mb-0">LOGO</h1>
          <a href="#" className="text-gray-600 hover:text-red-500 mb-4 md:mb-0">Mentions légales</a>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.5 19H4.5v-9h3v9zM6 8.5C5.17 8.5 4.5 7.83 4.5 7s.67-1.5 1.5-1.5 1.5.67 1.5 1.5S6.83 8.5 6 8.5zM20 19h-3v-4.5c0-1.38-1.12-2.5-2.5-2.5S12 13.12 12 14.5V19h-3v-9h3v1.22c.56-.86 1.57-1.47 2.7-1.47 2.01 0 3.3 1.49 3.3 3.5V19z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
