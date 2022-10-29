import ReactDOM from "react-dom/client";
import React from 'react';
import '../App.css';
import { Image, ScrollView, Text } from 'react';

 class BaconIpsum extends React.Component {
     
     constructor(props) {
        super(props);
        this.state = {text: ''};
        
        this.getApiStuff();
      }
      
      getApiStuff() {
          var url = "https://baconipsum.com/api/?type=all-meat";
          console.log(url);
          fetch(url)
            .then((response) => {
              return response.json();
            }).then((baconText) => {	
              this.setState({text:baconText})
          });
      }
       
        
       render() {
        return (
            <div id="bacon-ipsum">
                <ScrollView>
                    <Text>{this.state.text}</Text>
                </ScrollView>
            </div>
        );
      }
      
 }


export default BaconIpsum;