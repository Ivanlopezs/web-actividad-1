import './App.css'
import PrimaryButton from './Components/PrimaryButton.tsx'
import SidebarMenu from './Components/SidebarMenu.tsx'  
import InfoCard from './Components/InfoCard'  

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-emerald-50">
      <header className="bg-emerald-600 text-white shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold tracking-wide">Habit Tracker</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap justify-center md:justify-end text-base">
            <a className="mr-5 mb-2 md:mb-0 hover:text-emerald-200 transition-colors">Inicio</a>
            <a className="mr-5 mb-2 md:mb-0 hover:text-emerald-200 transition-colors">Mis Hábitos</a>
            <a className="mr-5 mb-2 md:mb-0 hover:text-emerald-200 transition-colors">Progreso</a>
            <a className="hover:text-emerald-200 transition-colors">Metas</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col md:flex-row flex-1">
        <section className="w-full md:w-3/4 p-6 md:p-10 bg-emerald-100">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800">
            Hábitos de Hoy 🌿
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <InfoCard
              title="Tomar 2L de agua"
              description="Este hábito tiene como objetivo en que mantengas una hidratación adecuada durante el día, distribuyendo el consumo de agua en diferentes momentos para mejorar la concentración, la energía y el funcionamiento general de su cuerpo."
            />
            <InfoCard
              title="Leer 20 minutos"
              description="Este habito tiene como objetivo en dedicar al menos 20 minutos al día a la lectura, lo que puede mejorar tu conocimiento, concentración y bienestar mental."
            />
            <InfoCard
              title="Hacer ejercicio"
              description="Este hábito tiene como objetivo en realizar al menos 30 minutos de ejercicio físico al día, lo que puede mejorar tu salud física, energía y bienestar general."
            />
            <InfoCard
              title="Meditar 10 minutos"
              description="Este hábito tiene como objetivo en dedicar al menos 10 minutos al día a la meditación, lo que puede mejorar tu bienestar emocional, reducir el estrés y aumentar tu claridad mental."
            />
          </div>
          <div className="mt-8">
            <PrimaryButton label="Agregar nuevo hábito" />
          </div>
        </section>
        <SidebarMenu />
      </main>

      <footer className="bg-emerald-700 text-emerald-100 mt-auto">
        <div className="container px-5 py-6 mx-auto text-center">
          <p className="text-sm">
            © 2026 HabitTracker — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
