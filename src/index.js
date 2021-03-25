import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {
  //color : 'green' 
};

if( currDate >= 1 && currDate < 12)
{ 
  greeting='Good Mornig';
  cssStyle.color = 'green';
}
else if( currDate >= 12 && currDate < 19)
{ 
  greeting='Good After Noon';
  cssStyle.color = 'orange'; 
}
else
{ 
  greeting='Good Mornig';
  cssStyle.color = 'Black'; 
}

ReactDom.render(
  <>
    <div>
     <h1>Hello Sir, <span style={cssStyle}> {greeting}</span> </h1>
    </div>
  </>
  ,document.getElementById('root')
);