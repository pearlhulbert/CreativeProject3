import ReactDOM from "react-dom/client";
import React from 'react';

const Bacon = () => {
  return (
  <div id = "bodyDiv"><h1>Bacon for the win!</h1>
    <script type="text/babel">
      class BaconGame extends React.Componenet {
        constructor(props) {
          super(props);
          
          this.handleChange = this.handleChange.bind(this);
          
        }
        
        handleChange(event) {
          
        }
        
        render() {
          );
        return(
          <div>
            <button onClick={this.handleChange}>Bacon</button>
          </div>
          );
        }
        
        
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<BaconGame />);
      var url = "https://baconipsum.com/api/?type=meat-and-filler";
        console.log("URL " + url);
        fetch(url)
          .then((data) => {
            return (data.json());
          })
    </script>
  <footer>
        <p>Github Repository: <a href="https://github.com/pearlhulbert/CreativeProject3">https://github.com/pearlhulbert/CreativeProject3</a></p>
        <p>By: Noelle Marshall, Pearl Hulbert, Logan Thurman</p>
    </footer></div>)
};

export default Bacon;