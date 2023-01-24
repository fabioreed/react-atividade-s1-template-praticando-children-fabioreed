import './styles.css'

export function CenteredCard({ children }) {
    return (
        <div className="divPai">
            <h1>Meu Post</h1>
            <span>
                {children}
            </span>
            <button>Click</button>
        </div>
    )
}