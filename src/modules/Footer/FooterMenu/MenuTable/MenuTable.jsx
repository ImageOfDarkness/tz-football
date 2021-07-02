import './MenuTable.scss'


function MenuTable(props) {
    const title = props.title
    const item = props.item
    const listItem = item.map((item) =>
        <li key={item.toString()} className="MenuTable__item">
            {item}
        </li>
    )

    return (

        <ul className="MenuTable">
            <li className="MenuTable__title">{title}</li>
            {listItem}
        </ul>

    )
}

export default MenuTable