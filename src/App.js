import { useState, useEffect } from 'react';
import './App.css'
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  const [artistsState, setArtistsState] = useState({ artists: [] });

  useEffect(() => {
    getArtists();
  }, []);

  function getArtists() {
    fetch('/artists')
    .then(res => res.json())
    .then(json => setArtistsState({artists: json}))
    .catch(error => console.log(error));
  }

  function handleAdd(event, formInputs) {
    console.log('handleAdd', formInputs);
    event.preventDefault();
    fetch('/artists', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdArtist => createdArtist.json())
    .then(jsonedArtist => { setArtistsState(prevState => 
      ({ artists: [jsonedArtist, ...prevState.artists] }))
    })
    .catch(error => console.log(error))
  }
  
  function handleDelete(deletedArtist) {
    fetch(`/artists/${deletedArtist.id}`, {
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
    }).then(() => {
      getArtists();
      })
      .catch(error => console.log(error));
    }
  
    function handleUpdate(event, formInputs) {
      event.preventDefault();
      console.log("handleupdate", formInputs)
      fetch(`/songs/${formInputs.id}`, {
        body: JSON.stringify(formInputs),
        method: 'PUT',
        headers: {
          // 'Accept': 'application/json, text/plain, */*', doesnt need
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        getArtists();
      })
      .catch(error => console.log(error));
    }

    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside 
          handleSubmit={handleAdd} 
          />
          <Main 
          artists={artistsState.artists} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate} 
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
}

export default App;
