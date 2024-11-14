


const FounderListItem = (props) => {


    return(
        <li>
          {/** {props.name} here means the name is to be provided by the parent */}
          <h3>{props.name}: {props.title}</h3>
          <p>{props.credential}</p>
        </li>
    )
}

export default FounderListItem