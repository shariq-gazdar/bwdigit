import React from 'react'

function CtaButton({children}) {
  return (
    <div className="bg-primary-accent text-primary-foreground px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)]">
      {children}
    </div>
  )
}

export default CtaButton