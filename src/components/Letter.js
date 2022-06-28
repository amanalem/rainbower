import './styles.css'

const Letter = (props) => {
  return (
    <div className="Letter" id={props.id}>
        <h1>{props.letter}</h1>
    </div>
  )
}

export default Letter