type SidebarItem = {
  title: string
  description: string
}

const items: SidebarItem[] = [
  { title: "🔥 Mejor Racha", description: "Leer 20 minutos al día - hecho en 12 dias consecutivos" },
  { title: "📊 Progreso Semanal", description: "Has completado el 75% de tus hábitos esta semana" },
  { title: "🎯 Objetivo del Mes", description: "Mantener al menos 3 hábitos activos durante el mes" }
]

export default function SidebarMenu() {
  return (
    <aside className="w-full md:w-1/4 bg-emerald-50 border-t md:border-t-0 md:border-l border-emerald-100">
      <div className="px-6 py-10">
        <div className="-my-8 divide-y-2 divide-emerald-100">
          {items.map((item, index) => (
            <div key={index} className="py-8 hover:bg-emerald-100 rounded-lg px-4 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              <h2 className="text-lg font-semibold text-emerald-800">{item.title}</h2>
              <p className="text-sm text-emerald-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}