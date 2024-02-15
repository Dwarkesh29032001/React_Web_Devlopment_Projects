import React, { Component } from "react";
import data from '../shared/constant/constantData';

class ToggleImage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            img1: data.bike1,
            img2: data.bike2,

            //set the Initial image and image name 

            currentImage: data.bike1,
            currentImageName: 'GT1'
        }
    }


    changeImage = () => {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage === this.state.img1 ? this.state.img2 : this.state.img1,
            currentImageName: prevState.currentImageName === 'GT1' ? 'GT2' : 'GT1',
        }));
    }
    render() {
        // const { myName, post } = this.props;
        return (<div>
            <h2>This is ToggleImage component</h2>
            <img src={this.state.currentImage} alt='' height="200px" />
            {/* <img src={dosa} alt='dosa' height="200px" /> */}
            <p className="mt-3"> Image name:{this.state.currentImageName} </p>
            <br></br>
            <button class="btn btn-primary" type="button" onClick={this.changeImage} >Toggle Image</button>
        </div>)
    }
}
export default ToggleImage;