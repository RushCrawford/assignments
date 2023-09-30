export default function Squares(props) {
    const colors = props.colors
    const styles = {
        backgroundColor: colors
    }
    console.log(props.colors)
    return (
        <>
            <div className="square" style={{backgroundColor: props.colors[0]}}></div>
        </>
    )
}