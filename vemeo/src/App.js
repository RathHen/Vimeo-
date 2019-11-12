import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    // marginLeft: '5%',
    flexWrap: 'wrap-reverse',
  };

  const beams = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    flexWrap: 'wrap',
    background: '#575757'

  };
  const Move2 = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    flexWrap: 'wrap',
    backgroundImage: 'linear-gradient(grey, white)'

  };




  return (
    <div>
      <div style={wrapper}>

            <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
                 alt="new"
                 className="center"
            />

            <div style={{textAlign: 'left', width: '30%',  paddingLeft: "30px" }}>
              <h2  > MONSOON III
              </h2>
              <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
              </p>
            </div>
      </div>


        <div style={beams}>

          <div style={{textAlign: 'left', width: '35%', paddingRight: "30px", color: 'white' }}>
            <h2 style={{fontColor: 'white'}}> BEAMS
            </h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
          </div>
          <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
               alt="new"
               className="center"
          />

        </div>





      <div style={Move2}>
        <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
             alt="new"
             className="center"
        />
        <div style={{textAlign: 'left', width: '35%', paddingLeft: "30px" , color: 'white'}}>
          <h2  > MOVE 2
          </h2>
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
