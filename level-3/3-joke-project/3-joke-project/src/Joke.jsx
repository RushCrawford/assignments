export default function Joke(props) {
    console.log(props)
    return(
      <div>
        <h1>{props.setup}</h1>
        <h1>{props.punchline}</h1>
      </div>
    )
  }