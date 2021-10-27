import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

var dataUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
var xhReq = new XMLHttpRequest();
xhReq.open("GET", dataUrl, false);
xhReq.send(null);
if(xhReq.status !== 200) alert('Error when reading data');
var jsonData = JSON.parse(xhReq.responseText);


var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var colorList = ['IndianRed','Salmon','Pink','Gold','Orange','Thistle','RebeccaPurple','ForestGreen','OliveDrab','SteelBlue','SkyBlue','RoyalBlue','Peru','LightSlateGray'];

class TextContents extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {dataLen:this.props.data.quotes.length,
                  index: getRandomInt(0,this.props.data.quotes.length),  
                  color:this.props.colorData[getRandomInt(0,this.props.colorData.length)]};
  }
  handleClick() {
    this.setState({index: getRandomInt(0,this.state.dataLen),color:this.props.colorData[getRandomInt(0,this.props.colorData.length)]});
  }
  
  render() {
    return(      
      <div id ="wholePage" style = {{backgroundColor:this.state.color}}>
      <div id="quote-section">
      <div id="quote-box">
        <div id="text" style={{color:this.state.color}}><span id="quote-mark"><i className="fa fa-quote-left"></i> </span>{this.props.data.quotes[this.state.index].quote}</div>
        <div id="author" style={{color:this.state.color}}>- {this.props.data.quotes[this.state.index].author}</div>
        <div id="icons">
    <div id="social-icons" style={{color:this.state.color}}><a id="tweet-quote" href="twitter.com/intent/tweet" title="Tweet this quote!" target="_blank"><i className="fab fa-twitter-square"></i></a><span>   </span><i className="fab fa-tumblr-square"></i></div>
    <div id="new-quote-button"><button id="new-quote" onClick={this.handleClick} style={{backgroundColor:this.state.color}}>new quote</button></div>
  </div>   
      </div>
        <p id="sign">by zzx</p>
        </div>
        </div>
    );   
  }
}

ReactDOM.render(
  <TextContents data={jsonData} colorData={colorList}/>,
  document.getElementById('root')
);


