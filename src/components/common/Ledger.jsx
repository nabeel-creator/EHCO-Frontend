export default function Ledger({ items }) {
  if (!items || items.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-[#F5F6F1] rounded-2xl p-4 sm:p-5 border border-[#E5EAE4] flex flex-col justify-between"
        >
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#064D3B] font-mono tracking-tight block mb-1.5">
              {item.figure}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#173D2D] leading-snug">
              {item.label}
            </p>
          </div>

          {item.howWeCounted && (
            <div className="mt-3 pt-2.5 border-t border-[#E5EAE4]">
              <details className="text-xs group">
                <summary className="text-[#064D3B] font-bold text-[11px] cursor-pointer hover:underline flex items-center justify-between">
                  <span>Methodology</span>
                  <span className="text-[10px] transition-transform duration-200 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-1.5 text-[10px] text-[#738078] leading-relaxed bg-white p-2 rounded-lg border border-[#E5EAE4]">
                  {item.howWeCounted}
                </p>
              </details>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
