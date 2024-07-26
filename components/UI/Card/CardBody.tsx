
function CardBody(props: { variant?: string, children: any, [x: string]: any }) {
    const { variant, children, ...rest } = props;

    return (
        <div className={
            `rounded  bg-blue-50 ${variant === 'padded' ? 'p-4' : 'p-6'}`
        }>
            {children}
        </div>
    );
}

export default CardBody;
