import React from 'react';
import './App.css';
import './index.css';

function App() {

  return (
    <div>
      {/* Div container for Monsoon */}
      <div className="wrapperTwo">
            <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
                  alt="new"
                 className="center"/>
            <div style={{textAlign: 'left', width: '30%',  paddingLeft: "30px" }}>
                <h2  > MONSOON III</h2>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                </p>
            </div>
      </div>

      <div className="beams">
          {/* Div container for Beams */}
          <div style={{textAlign: 'left', width: '35%', paddingRight: "30px", color: 'white' }}>
            <h2 style={{fontColor: 'white'}}> BEAMS</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
          </div>
          <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
               alt="new"
               className="center"/>
      </div>

      <div className="Move2">
        {/* Div container for Move2 */}
        <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
             alt="new"
             className="center"/>
        <div style={{textAlign: 'left', width: '35%', paddingLeft: "30px" , color: 'white'}}>
          <h2  > MOVE 2</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
