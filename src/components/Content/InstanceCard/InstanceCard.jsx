const InstanceCard = (props) => {
    const visibility = props.Card.visibility;
    return (
        <div
            className='card'
            style={{ backgroundImage: `url(${props.Card.image})` }}
            onClick={() => props.setCard((e) => props.onClick(e))}
            onMouseEnter={() => props.setCard((e) => props.onHover(e))}
            onMouseLeave={() => props.setCard((e) => props.outHover(e))} >
            <div style={{ color: `${props.Card.color}` }}>{props.Card.phrase}</div>
            <div style={{ opacity: `${visibility}` }}>{props.init.name}</div>
            <div style={{ opacity: `${visibility}` }}>{props.init.content}</div>
            <div style={{ opacity: `${visibility}` }}>{props.init.firstBonus}</div>
            <div style={{ opacity: `${visibility}` }}>{props.init.secondBonus}</div>
            <div style={{ opacity: `${visibility}` }}>{props.init.thirdBonus}</div>
            <div className='weightFor'>
                <section>{props.init.weight}</section>
                <section>{props.init.unit}</section>
            </div>
        </div>
    )
}

export default InstanceCard;