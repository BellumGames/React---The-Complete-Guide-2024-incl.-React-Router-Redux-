
export default function TabButton({ children }) {
    function handleClick() {
        console.log("Hello world!");
    }

    return (
        <li><button onClick={handleClick}>{children}</button></li>
    );
}

/*
export default function TabButton(props) {
    return <li><button>{props.children}</button></li>
}

export default function Card({ name, children }) {
    return (
        <article className="card">
            <h2>{name}</h2>
            {children}
        </article>
    );
}
*/