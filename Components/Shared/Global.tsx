export const HR = ({ className }: { className?: string }) => <div className={`w-full border ${className}`} />

export const Container = ({ className, children }: { className?: string, children?: React.ReactNode }) => <div className={`container mx-auto ${className}`} >{children}</div>