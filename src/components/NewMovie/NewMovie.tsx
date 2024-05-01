import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImageURL] = useState('');
  const [imdbUrl, setImbdURL] = useState('');
  const [imdbId, setImdbID] = useState('');

  const resetAll = () => {
    setTitle('');
    setDescription('');
    setImageURL('');
    setImbdURL('');
    setImdbID('');
  };

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    onAdd({
      title: title.trim(),
      description: description.trim(),
      imgUrl: imgUrl.trim(),
      imdbUrl: imdbUrl.trim(),
      imdbId: imdbId.trim(),
    });

    setCount(count + 1);
    resetAll();
  };

  const disableButton = () => {
    if (!title || !imgUrl || !imdbUrl || !imdbId) {
      return true;
    }

    return false;
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleAdd}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={newTitle => {
          setTitle(newTitle);
        }}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={newDescription => {
          setDescription(newDescription);
        }}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={newImageURL => {
          setImageURL(newImageURL);
        }}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={newImdbURL => {
          setImbdURL(newImdbURL);
        }}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={newImdbId => {
          setImdbID(newImdbId);
        }}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={disableButton()}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
