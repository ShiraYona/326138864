import "./viewData";
import { Fieldset } from 'primereact/fieldset';
const ViewData = (props) => {


    return (<>
        <div  >
            {console.log("kkkkkk")}
            <Fieldset legend={props.item.title}>
                <p>{props.item.description}</p>
                <p>{props.item.start}</p>
            </Fieldset>
            {/* <h4>{props.item.title}</h4>
            <h5>{props.item.description}</h5>
            <h5>{props.item.start}</h5> */}
        </div>

        <br></br></>)
}

export default ViewData