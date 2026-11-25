export default function Container({ className = '', children, ...props }) {
  return (
    <div
      className={`mx-auto max-w-[1200px] px-5 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
