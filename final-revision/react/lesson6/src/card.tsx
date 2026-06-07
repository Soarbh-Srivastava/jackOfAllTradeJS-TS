interface CardProps{
    title: string
    children: React.ReactNode;
}

export default function Card({title,children}:CardProps){
    return(
        <div>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}