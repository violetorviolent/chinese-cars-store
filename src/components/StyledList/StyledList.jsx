import './StyledList.css';

const StyledList = (props) => {
    return (
        <div className='section__padding styledList'>
            <h2>{props.content.title}</h2>
            <p>{props.content.subtitle}</p>
            <ol>
                {props.content.info.map((card) => {
                    return (
                        <li key={card.title}>
                            <div>
                                <p className='bold'>{card.title}</p>
                                <p>{card.p}</p>
                            </div>
                        </li>
                    )
                })}

            </ol>
        </div>
    )
}

export default StyledList