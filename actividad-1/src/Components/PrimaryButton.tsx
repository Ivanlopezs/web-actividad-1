type PrimaryButtonProps = {
  label: string
  onClick?: () => void
}

export default function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:bg-emerald-700 hover:shadow-lg active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
    >
      {label}
    </button>
  )
}