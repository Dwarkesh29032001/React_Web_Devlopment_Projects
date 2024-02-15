import './external.css';
import mycss from './cssproperty.module.css';

const MyCssComp = () => {

    const txtDanger = {
        color: "red",
        backgroundColor: "aqua",
        fontSize: "25px"
    }
    const mycssProperty = {
        color: false ? "Green" : "Pink",
        backgroundColor: true ? "aqua" : "lightgray",
        fontSize: false ? "30px" : "20px",
        textTransform: false ? "lowercase" : "uppercase"
    }
    return (<div>
        {/* use of internal css  */}
        <h2 style={{ "color": "blue", "textAlign": "center" }}>This is MyCss components</h2>
        <p style={txtDanger}>Welcome You All In Infoway</p>
        <p style={mycssProperty}>this is react session</p>

        {/* use of external css  */}
        <div className="circle"> hi</div>

        {/* use of modular css  */}
        <h2 className={mycss.special}>Dwarkesh Virkhare</h2>
    </div>)
}
export default MyCssComp;