export function Section({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <section className={`max-w-7xl mx-auto p-6 ${className}`} {...props}>
            {children}
        </section>
    )
}

export function SectionTitle({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <h2 className={`text-2xl font-bold pb-4 text-gray-800 ${className}`} {...props}>
            {children}
        </h2>
    )
}

export function SectionContent({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <div className={`text-gray-600 ${className}`} {...props}>
            {children}
        </div>
    )
}
