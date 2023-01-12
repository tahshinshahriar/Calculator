import { Textfit } from "react-textfit";
import "./Screen.css";


const Screen = ({ value }) => {
    return (
    <Textfit className="screen" mode="Single" max={70}>
        {value}
    </Textfit>
    );
};
export default Screen;