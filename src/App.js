import React from 'react';

class App extends React.Component {
  render() {
    const { notes } = this.state;
    return(
      <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
        <h1 className="code f2-l">Jai Guru Deva Bulk SMS Services</h1>
      </div>
    );
  }
}

export default App;