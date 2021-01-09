import Artist from './Artist.js';

function Artists({ artists, handleDelete, handleUpdate }) {
    return (
      <div>
        {artists.map(artist  => 
          <Artist
            key={artist.id} 
            artist={artist}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Artists;
