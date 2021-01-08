import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
<<<<<<< HEAD
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
=======
// import Nav from './components/Nav';

function App() {
  const [quotesState, setQuotesState] = useState({ quotes: [] });

  useEffect(() => {
   getQuotes();
  }, []);

  function getQuotes() {
    fetch('/quotes')
    .then(res => res.json())
    .then(json => setQuotesState({quotes: json}))
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
    .catch(error => console.log(error));
  }

  function handleAdd(event, formInputs) {
    event.preventDefault();
<<<<<<< HEAD
    fetch('/artists', {
=======
    fetch('/quotes', {
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
<<<<<<< HEAD
    .then(createdArtist => createdArtist.json())
    .then(jsonedArtist => { setArtistsState(prevState => 
      ({ artists: [jsonedArtist, ...prevState.artists] }))
=======
    .then(createdNotice => createdNotice.json())
    .then(jsonedNotice => { setQuotesState(prevState => 
      ({ quotes: [jsonedNotice, ...prevState.quotes] }))
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
    })
    .catch(error => console.log(error))
  }
  
<<<<<<< HEAD
  function handleDelete(deletedArtist) {
    fetch(`/artists/${deletedArtist.id}`, {
=======
  function handleDelete(deletedNotice) {
    fetch(`/quotes/${deletedNotice.id}`, {
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
    }).then(() => {
<<<<<<< HEAD
      getArtists();
=======
     getQuotes();
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
      })
      .catch(error => console.log(error));
    }
  
    function handleUpdate(event, formInputs) {
      event.preventDefault();
<<<<<<< HEAD
      fetch(`/artists/${formInputs.id}`, {
=======
      fetch(`/quotes/${formInputs.id}`, {
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
        body: JSON.stringify(formInputs),
        method: 'PUT',
        headers: {
          // 'Accept': 'application/json, text/plain, */*', doesnt need
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
<<<<<<< HEAD
        getArtists();
=======
       getQuotes();
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
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
<<<<<<< HEAD
          artists={artistsState.artists} 
=======
          quotes={quotesState.quotes} 
>>>>>>> 62b7b1089e52078e041d3282e57bed529bbe640d
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
