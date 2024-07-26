function CardHeader(props: { variant?: string, children: any, [x: string]: any }) {
    const { variant, children, ...rest } = props;
    // Pass the computed styles into the `__css` prop
    return (
        <div className={
            `p-2 px-4 `
        }>
            {children}
        </div>
    );
}

export default CardHeader;