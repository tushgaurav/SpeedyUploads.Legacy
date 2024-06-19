export function Section({ children, ...props }: { children: React.ReactNode }) {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

export function SectionTitle({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <h2 className={`text-2xl font-bold  text-black ${className}`} {...props}>
            {children}
        </h2>
    )
}

export function SectionContent({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <div className={`text-black ${className}`} {...props}>
            {children}
        </div>
    )
}
