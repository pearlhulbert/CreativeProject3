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
      imgIndices:  [1, 2, 3, 4],
      allowClick: true,
      panClass: ["baconButton", "baconButton", "baconButton", "baconButton", "baconButton"]
    };

    this.winBacon = this.winBacon.bind(this);
    this.resetClass = this.resetClass.bind(this);
    this.buttonClick1 = this.buttonClick1.bind(this);
    this.buttonClick2 = this.buttonClick2.bind(this);
    this.buttonClick3 = this.buttonClick3.bind(this);
    this.buttonClick4 = this.buttonClick4.bind(this);
    this.buttonClick5 = this.buttonClick5.bind(this);
    this.randomizeImages = this.randomizeImages.bind(this);
  }

  resetClass(){
    this.setState({ panClass: ["baconButton", "baconButton", "baconButton", "baconButton", "baconButton"] });
  }

  buttonClick1(event){
    event.preventDefault();
    if(this.state.panClass[0] === "baconButton"){
      this.setState({ panClass: ["rotate", "baconButton", "baconButton", "baconButton", "baconButton"] });
      setTimeout(this.resetClass, 1000);
    }
    this.randomizeImages([0, 1]);
  }

  buttonClick2(event) {
    event.preventDefault();
    if (this.state.panClass[1] === "baconButton") {
      this.setState({ panClass: ["baconButton", "rotate", "baconButton", "baconButton", "baconButton"] });
      setTimeout(this.resetClass, 1000);
    }
    this.randomizeImages([1, 2]);
  }

  buttonClick3(event) {
    event.preventDefault();
    if (this.state.panClass[2] === "baconButton") {
      this.setState({ panClass: ["baconButton", "baconButton", "rotate", "baconButton", "baconButton"] });
      setTimeout(this.resetClass, 1000);
    }
    this.randomizeImages([2, 3]);
  }

  buttonClick4(event) {
    event.preventDefault();
    if (this.state.panClass[3] === "baconButton") {
      this.setState({ panClass: ["baconButton", "baconButton", "baconButton", "rotate", "baconButton"] });
      setTimeout(this.resetClass, 1000);
    }
    this.randomizeImages([1, 3]);
  }

  buttonClick5(event) {
    event.preventDefault();
    if (this.state.panClass[4] === "baconButton") {
      this.setState({ panClass: ["baconButton", "baconButton", "baconButton", "baconButton", "rotate"] });
      setTimeout(this.resetClass, 1000);
    }
    this.randomizeImages([0, 2]);
  }

  randomizeImages(indices){
    if(!this.state.allowClick){ return; }

    let newIndices = this.state.imgIndices;
    indices.forEach(i => 
      newIndices[i] = Math.floor(Math.random() * this.state.notBacon.length)
    );
    var isTrue = newIndices.every(index => index === 0);
    this.setState({imgIndices : newIndices});
    
    if (isTrue) {
      this.setState({allowClick: false});
      setTimeout(this.winBacon, 1000);
    }
  }

  winBacon(){
    alert("you win!");
  }

  render() {
    const notBacons = this.state.imgIndices.map((item, index) =>
      <img key={index} alt="not bacon" src={this.state.notBacon[item]} width="20%" />
    );
    const panImage = "https://i.pinimg.com/originals/c3/6a/2d/c36a2da77aff809fc33fdf71d2585091.png";
    return (
    <div id = "bodyDiv"><h1>Flip the pans, Get 4 bacons to win!</h1>
    <div id = "baconImages">
          {notBacons}
    </div>
    <input type="image" alt="pan1" src={panImage} class={this.state.panClass[0]} onClick={this.buttonClick1} width="10%" />
    <input type="image" alt="pan2" src={panImage} class={this.state.panClass[1]} onClick={this.buttonClick2} width="10%" />
    <input type="image" alt="pan3" src={panImage} class={this.state.panClass[2]} onClick={this.buttonClick3} width="10%" />
    <input type="image" alt="pan4" src={panImage} class={this.state.panClass[3]} onClick={this.buttonClick4} width="10%" />
    <input type="image" alt="pan5" src={panImage} class={this.state.panClass[4]} onClick={this.buttonClick5} width="10%" />
    <footer>
          <p>Github Repository: <a href="https://github.com/pearlhulbert/CreativeProject3">https://github.com/pearlhulbert/CreativeProject3</a></p>
          <p>By: Noelle Marshall, Pearl Hulbert, and Logan Thurman</p>
      </footer></div>);
  }
}

export default Bacon;