import './Square.css'
const Square = (props) => {
    return (
        <div className={props.color === 'light' ? 'light' : 'dark'}></div>
    )
}

export default Square