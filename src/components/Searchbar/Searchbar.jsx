import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../features/pokemon/pokemonSlice';
import { SearchInput } from './Searchbar.styles';

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch(inputValue));
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue, dispatch]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <SearchInput
      type={'text'}
      placeholder={'Buscar por nombre de Pokemon'}
      id="searchbar"
      onChange={handleChange}
      value={inputValue}
    />
  );
};

export default Searchbar;
