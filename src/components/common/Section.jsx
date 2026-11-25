const bgVariants = {
  main: 'bg-[#F5F6F1]',
  white: 'bg-white',
  mint: 'bg-[#E7EDE5]',
  muted: 'bg-[#E7EDE5]',
  forest: 'bg-[#064D3B] text-white dark-bg',
  dark: 'bg-[#17231F] text-white dark-bg',
  navy: 'bg-[#17231F] text-white dark-bg',
}

export default function Section({
  bg = 'main',
  className = '',
  containerClassName = '',
  children,
  id,
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-12 lg:py-16 ${bgVariants[bg] || bgVariants.main} ${className}`}
      {...props}
    >
      <div className={`mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
