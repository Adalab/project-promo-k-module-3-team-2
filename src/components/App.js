import "../stylesheets/App.scss";
import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import MainCard from "./MainCard";
import "../stylesheets/_main.scss";
import "../stylesheets/_mainOptions.scss";
import MainDesign from "./MainDesign";
import MainForm from "./MainForm";
import MainShare from "./MainShare";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.state = this.getLocalStorage();
  }
  handleChange(event) {
    const key = event.target.id;
    this.setState(
      {
        [key]: event.target.value,
      },
      () => {
        localStorage.setItem("object", JSON.stringify(this.state));
      }
    );

    console.log(event.target.value);
    console.log(this.state.name);
    console.log(event.target.id);
  }

  //componentDidUpdate() {
  //  localStorage.setItem('object', JSON.stringify(this.state));
  //}

  getLocalStorage() {
    const localFormData = JSON.parse(localStorage.getItem("object"));
    if (localFormData === null) {
      return {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: "",
        // 'url(' +
        // 'https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif' +
        // ')',
      };
    } else {
      return {
        name: localFormData.name,
        job: localFormData.job,
        photo: localFormData.photo,
        phone: localFormData.phone,
        email: localFormData.email,
        linkedin: localFormData.linkedin,
        github: localFormData.github,
        palette: localFormData.palette,
      };
    }
  }

  // return form;
  // console.log(localFormData);
  // }

  render() {
    //console.log(this.getLocalStorage());
    return (
      <>
        <Header />
        <main className="mainProfileCards" role="main">
          <MainCard dataFromParent={this.state} />
          <section className="mainOptions">
            <MainDesign />
            <MainForm inputChange={this.handleChange} />
            <MainShare />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
