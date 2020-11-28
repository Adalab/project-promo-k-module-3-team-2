import '../stylesheets/App.scss';
import Header from './Header';
import React from 'react';
import Footer from './Footer';
import MainCard from './MainCard';
import '../stylesheets/_main.scss';
import '../stylesheets/_mainOptions.scss';
import MainDesign from './MainDesign';
import MainForm from './MainForm';
import MainShare from './MainShare';
import api from "../service/api";

class CardGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      palette: 1,
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
      apiSuccess: false,
      apiCardUrl: '',
      apiError: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = this.getLocalStorage();
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    const apiData = {
      name: this.state.name,
      job: this.state.job,
      photo: this.state.photo,
      phone: this.state.phone,
      email: this.state.email,
      linkedin: this.state.linkedin,
      github: this.state.github,
      palette: this.state.palette,
    };
    api(apiData).then((response) => {
      if (response.success === true) {
        this.setState({
          apiSuccess: true,
          apiCardUrl: response.cardURL,
          apiError: '',
        });
        console.log(this.state.apiCardUrl);
      } else {
        this.setState({
          apiSuccess: false,
          apiCardUrl: '',
          apiError: response.error,
        });
      }
    });
  }

  handleChange(event) {
    const key = event.target.id;
    let maxLength;
    if (event.target.id === 'name') {
      maxLength = 16;
    } else if (event.target.id === 'job') {
      maxLength = 20;
    } else {
      maxLength = 50;
    }
    if (event.target.value.length < maxLength) {
      this.setState(
        {
          [key]: event.target.value,
        },
        () => {
          localStorage.setItem('object', JSON.stringify(this.state));
        }
      );
    } else {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }

  //componentDidUpdate() {
  //  localStorage.setItem('object', JSON.stringify(this.state));
  //}

  getLocalStorage() {
    const localFormData = JSON.parse(localStorage.getItem('object'));
    if (localFormData === null) {
      return {
        palette: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
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

  handleReset() {
    localStorage.clear();
    this.setState({
      palette: 1,
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
      // 'url(' +
      // 'https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif' +
      // ')',
    });
  }
  render() {
    return (
      <>
        <Header />
        <main className='mainProfileCards' role='main'>
          <MainCard
            handleReset={this.handleReset}
            dataFromParent={this.state}
          />
          <section className='mainOptions'>
            <MainDesign
              inputChange={this.handleChange}
              dataFromParent={this.state}
            />
            <MainForm
              inputChange={this.handleChange}
              dataFromParent={this.state}
            />
            <MainShare sendRequest= {this.sendRequest} dataFromParent={this.state} />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default CardGenerator;