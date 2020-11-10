import React from 'react';
import MainCard from './MainCard';
import MainOptions from './MainOptions';
import '../stylesheets/_main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <main className="mainProfileCards" role="main">
          <MainCard />
          <MainOptions />
        </main>
      </>
    );
  }
}
export default Main;