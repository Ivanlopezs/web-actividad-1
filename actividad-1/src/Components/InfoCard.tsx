type InfoCardProps = {
  title: string
  description: string
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-white border border-emerald-100 shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
      <h2 className="text-xl font-semibold mb-2 text-emerald-800">
        {title}
      </h2>
      <p className="text-emerald-600">
        {description}
      </p>
    </div>
  )
}