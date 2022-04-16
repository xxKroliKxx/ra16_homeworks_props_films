import Star from "./Star";

export function Stars({count}) {
    if (count < 1 || count > 5) {
        return <></>
    }
    const li = []
    for (let index = 1; index <= count; index++) {
        li.push(<Star key={index}/>)
    }
    return (
        <ul className="card-body-stars u-clearfix">
            {li}
        </ul>
    )
}