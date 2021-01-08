import Artists from './Artists.js';

function Main({ artists, handleDelete, handleUpdate }) {
    return (
      <main>
        <Artists 
        artists={artists} 
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} 
        />
      </main>
    );
}

export default Main;
