function Options({ question }) {
    return (
        <div className="option">
            <div className="options">
                {question.options.map((option)=> (<button className="btn btn-option" key={option}>{option}</button>))}
            </div>
        </div>
    )
}

export default Options
