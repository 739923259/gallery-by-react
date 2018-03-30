require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imgeDatas=require('../data/imageDatas.json');
function getImageURL(imgeArr) {
    for(var i=0,j=imgeArr.length;i<j;i++){
      var imageItem=imgeArr[i];
      imageItem.imgeURL=require("../images/"+imageItem.fileName);
    }

    return imgeArr;
}
imgeDatas=getImageURL(imgeDatas);
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
