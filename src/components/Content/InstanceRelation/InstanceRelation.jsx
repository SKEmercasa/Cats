const InstanceRelation = (props) => {
    return (
        <div>
            <span style={{ color: `${props.Card.linkColor[1]}` }}>{props.Card.relation[1]}</span >
            <span
                onClick={() => props.setCard((e) => props.onClick(e))}
                onMouseEnter={() => props.setCard((e) => props.onHover(e))}
                onMouseLeave={() => props.setCard((e) => props.outHover(e))}
                style={{ color: `${props.Card.linkColor[0]}` }}>{props.Card.linkPhrase}</span>
        </div>
    )
}

export default InstanceRelation;