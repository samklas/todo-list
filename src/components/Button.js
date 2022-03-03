const Button = ({ handleClick }) => {
   
    return (
        <div>
            <button className="btn" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Button