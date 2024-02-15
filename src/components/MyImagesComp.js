// import samosa from '../assets/images/samosa.jpg';
// import dosa from '../assets/images/dosa.jpg';
// import vadapav from '../assets/images/vadapav.jpg';
import data from '../shared/constant/constantData';


const MyImagesComp = () => {

    return (<div>
        <h2>This is My Images Component</h2>
        <img src={data.bike1} alt='bike1' height="200px" />
        <img src={data.bike2} alt='bike2' height="200px" />
        <img src={data.bike3} alt='bike3' height="200px" />
       
        {/* <img src={data.bike4} alt='bike4' height="200px" />
        <img src={data.bike5} alt='bike5' height="200px" /> */}
        {/* access data from constant file  */}
        < hr />
        

        <img src={data.GT} alt='GT' height="200px" />
        <img src={data.thar1} alt='thar1' height="200px" />
        <img src={data.thar2} alt='thar2' height="200px" />
        <img src={data.thar3} alt='thar3' height="200px" />
        <br />
        <video controls src={data.supercar} height="300px" width="300px" ></video>
    </div>)
}
export default MyImagesComp;