import {MockedIconComponent} from "./MockedIconComponent";
import {useExtras} from "../shared/hooks/useExtras";

export default function ExtrasPicker({timeout}:{timeout:number}) {
    const {data, error, isLoading,mutate} = useExtras(timeout);

    if (isLoading) {
        return <div>Extras are loading...</div>
    }

    async function selectExtra(){
        // TODO: Add request to send the selected extra to the server
        await mutate() // imagine this request contains a list of booked extras

    }

    return (
        <div style={{background: "lightgray", padding: "16px 32px", marginBottom: "18px"}}>
            <h3 style={{marginBottom: 0}}>Extras</h3>
            <p style={{margin: 0}}>{data.text}</p>
            <MockedIconComponent name={"EXTRAS"}/>
            <select style={{display: "block"}} onChange={selectExtra}>
                <option value="1">Breakfast</option>
                <option value="1">Extra Towels</option>
            </select>
        </div>
    )

}
