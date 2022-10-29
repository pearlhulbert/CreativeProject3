import ReactDOM from "react-dom/client";
import React from 'react';
import '../App.css';

class Bacon extends React.Component {
  constructor(props) {
    super(props);
    var bacon = "https://thestayathomechef.com/wp-content/uploads/2020/01/How-To-Cook-Bacon-In-The-Oven-1.jpg";

    this.state = {
      notBacon: [
        bacon,
        "https://cdn.shopify.com/s/files/1/0892/7618/products/i-am-not-bacon-01_mockup_Wrinkle-Front_Maroon-Triblend_1600x.png?v=1599158070",
        "https://qph.cf2.quoracdn.net/main-qimg-9870dce5d0e05c3166cdcb59bce26bd9-lq",
        "https://3.bp.blogspot.com/-l30-mvlPhe0/UKrlUfzEeyI/AAAAAAAAAX0/zLmJboRS6sM/s1600/no-bacon.gif",
        "https://as1.ftcdn.net/v2/jpg/01/45/99/70/1000_F_145997055_yc0AXDgo36qmd32c87K0IDiX3qcCSUqH.jpg",
        "https://m.media-amazon.com/images/I/41E8Dbi2EjL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingONE%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
      ], 
      imgIndices:  [1, 2, 3, 4]
    };

    this.buttonClick1 = this.buttonClick1.bind(this);
    this.buttonClick2 = this.buttonClick2.bind(this);
    this.buttonClick3 = this.buttonClick3.bind(this);
    this.randomizeImages = this.randomizeImages.bind(this);
  }

  buttonClick1(event){
    event.preventDefault();
    this.randomizeImages(0, 2);
  }

  buttonClick2(event) {
    event.preventDefault();
    this.randomizeImages(1, 3);
  }

  buttonClick3(event) {
    event.preventDefault();
    this.randomizeImages(2, 4);
  }

  randomizeImages(start, stop){
    let newIndices = this.state.imgIndices;
    for(let i = start; i < stop; i++){
      newIndices[i] = Math.floor(Math.random() * this.state.notBacon.length)
    }
    var isTrue = newIndices.every(index => index == 0);
    this.setState({imgIndices : newIndices});
    if (isTrue) {
      alert("you win!");
    }
  }

  render() {
    const notBacons = this.state.imgIndices.map((item, index) =>
      <img key={index} src={this.state.notBacon[item]} width="20%" />
    );
    return (
    <div id = "bodyDiv"><h1>Bacon for the win!</h1>
    <div id = "baconImages">
          {notBacons}
    </div>
    <button class="baconButton" onClick={this.buttonClick1}> Button 1</button>
    <button class="baconButton" onClick={this.buttonClick2}> Button 2</button>
    <button class="baconButton" onClick={this.buttonClick3}> Button 3</button>
    <footer>
          <p>Github Repository: <a href="https://github.com/pearlhulbert/CreativeProject3">https://github.com/pearlhulbert/CreativeProject3</a></p>
          <p>By: Noelle Marshall, Pearl Hulbert, and Logan Thurman</p>
      </footer></div>);
  }
}

export default Bacon;