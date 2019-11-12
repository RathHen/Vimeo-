import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 'auto/9',
    padding: '20px',
    margin: '5%',
    // color: '#444',
    // border: '1px solid #1890ff',
    flexWrap: 'wrap-reverse'

  };


  return (
    <div>
      <div style={wrapper}>
            <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
                 alt="new"
                 className="center"
            />
            <div style={{textAlign: 'center', width: '45%', padding: "20px" }}>
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

      {/*<img src="https://i.vimeocdn.com/video/590587169_530x315.jpg"*/}
      {/*     alt="new"*/}
      {/*     />*/}

      {/*<img src="https://i.vimeocdn.com/video/589972810_530x315.jpg"*/}
      {/*     alt="new"*/}
      {/*/>*/}

      <div style={wrapper}>
        <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
             alt="new"
             className="center"
        />
        <div style={{textAlign: 'center', width: '45%', padding: "20px" }}>
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
      <div style={wrapper}>
        <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
             alt="new"
             className="center"
        />
        <div style={{textAlign: 'center', width: '45%', padding: "20px" }}>
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


    </div>
  );
}

export default App;
