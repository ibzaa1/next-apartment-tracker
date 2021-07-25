import { useState } from 'react';

const FavoriteBtn = () => {
  const [favoriteBtn, setFavoriteBtn] = useState(false);

  const handleFavorite = () => {
    setFavoriteBtn(!favoriteBtn);
  };

  return (
    <div>
      <button
        className='bg-gray-300 p-2 my-2 hover:bg-gray-200'
        onClick={handleFavorite}
      >
        {favoriteBtn ? 'Remove From Favorites' : 'Add to favorites'}
      </button>
    </div>
  );
};

export default FavoriteBtn;
