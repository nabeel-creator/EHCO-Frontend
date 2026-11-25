export default function PartnerWall({ partners }) {
  if (!partners || partners.length === 0) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="bg-white rounded-2xl border border-[#E5EAE4] hover:border-[#064D3B]/30 h-24 flex items-center justify-center px-4 card-shadow hover:-translate-y-0.5 transition-all duration-200 text-center"
        >
          <span className="text-xs sm:text-sm font-bold text-[#064D3B]">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
  )
}
