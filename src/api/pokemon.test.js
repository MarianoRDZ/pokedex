import API from './axios';
import {
  getPokemonList,
  getDetailedPokemonList,
  getPokemonByName,
} from './pokemon';

vi.mock('./axios');

describe('getPokemonList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of pokemons', async () => {
    const mockResponse = {
      data: {
        results: [{ name: 'some_pokemon', url: 'pokemon_url' }],
      },
    };

    API.get.mockResolvedValue(mockResponse);

    const result = await getPokemonList(20);

    expect(result).toEqual(mockResponse.data.results);
    expect(API.get).toHaveBeenCalledWith('/pokemon/?limit=20');
  });

  it('should return an error if the API fails', async () => {
    API.get.mockRejectedValue(new Error('API down'));

    await expect(getPokemonList()).rejects.toThrow('API down');
  });

  it('should return empty if no data is available', async () => {
    API.get.mockResolvedValue({ data: { results: [] } });

    const result = await getPokemonList();
    expect(result).toEqual([]);
  });
});

describe('getDetailedPokemonList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of pokemons with name and sprite', async () => {
    const mockBasicList = {
      data: {
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
          },
        ],
      },
    };

    const mockDetailResponse = (name) => ({
      data: {
        sprites: {
          front_default: `sprite_of_${name}`,
        },
      },
    });

    API.get.mockImplementation((url) => {
      if (url.startsWith('/pokemon')) {
        return Promise.resolve(mockBasicList);
      } else if (url.includes('pikachu')) {
        return Promise.resolve(mockDetailResponse('pikachu'));
      } else if (url.includes('bulbasaur')) {
        return Promise.resolve(mockDetailResponse('bulbasaur'));
      }

      return Promise.reject(new Error('Unknown URL: ' + url));
    });

    const result = await getDetailedPokemonList(50);

    expect(result).toEqual([
      { name: 'pikachu', sprite: 'sprite_of_pikachu' },
      { name: 'bulbasaur', sprite: 'sprite_of_bulbasaur' },
    ]);

    expect(API.get).toHaveBeenCalledWith('/pokemon/?limit=50');
    expect(API.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
    expect(API.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    );
  });

  it('should return an error if the API fails', async () => {
    API.get.mockRejectedValue(new Error('API down'));

    await expect(getDetailedPokemonList()).rejects.toThrow('API down');
  });

  it('should return empty if no data is available', async () => {
    API.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: [] } })
    );

    const result = await getDetailedPokemonList();
    expect(result).toEqual([]);
    expect(API.get).toHaveBeenCalledTimes(1);
  });
});

describe('getPokemonByName', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a single pokemon', async () => {
    const mockResponse = {
      data: {
        name: 'pokemon_name',
        id: '1',
        types: ['normal', 'fire'],
        height: 40,
        weight: 20,
        sprites: {
          front_default: 'sprite_url',
        },
      },
    };

    API.get.mockResolvedValue(mockResponse);

    const result = await getPokemonByName(mockResponse.data.name);

    expect(result).toEqual({
      name: 'pokemon_name',
      id: '1',
      types: ['normal', 'fire'],
      height: 40,
      weight: 20,
      sprite: 'sprite_url',
    });

    expect(API.get).toHaveBeenCalledWith('/pokemon/pokemon_name');
  });

  /*it('should return an error if the API fails', async () => {
    API.get.mockRejectedValue(new Error('API down'));

    await expect(getPokemonList()).rejects.toThrow('API down');
  });

  it('should return empty if no data is available', async () => {
    API.get.mockResolvedValue({ data: { results: [] } });

    const result = await getPokemonList();
    expect(result).toEqual([]);
  });*/
});
