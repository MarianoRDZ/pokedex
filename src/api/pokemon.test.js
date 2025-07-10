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

  it('should return a list of detailed pokemons', async () => {
    const mockBasicList = {
      data: {
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
        ],
      },
    };

    const mockPikachuDetail = {
      data: {
        name: 'pikachu',
        id: 25,
        types: [{ slot: 1, type: { name: 'electric' } }],
        height: 4,
        weight: 60,
        sprites: {
          other: {
            'official-artwork': {
              front_default: 'https://example.com/pikachu.png',
            },
          },
        },
        stats: [
          { base_stat: 35, stat: { name: 'hp' } },
          { base_stat: 55, stat: { name: 'attack' } },
          { base_stat: 40, stat: { name: 'defense' } },
          { base_stat: 90, stat: { name: 'speed' } },
        ],
      },
    };

    API.get.mockImplementation((url) => {
      if (url === '/pokemon/?limit=50') {
        return Promise.resolve(mockBasicList);
      }
      if (url === 'https://pokeapi.co/api/v2/pokemon/pikachu') {
        return Promise.resolve(mockPikachuDetail);
      }
      return Promise.reject(new Error('Unknown URL'));
    });

    const result = await getDetailedPokemonList(50);

    expect(result).toEqual([
      {
        name: 'pikachu',
        id: 25,
        types: [{ slot: 1, type: { name: 'electric' } }],
        height: 4,
        weight: 60,
        sprite: 'https://example.com/pikachu.png',
        stats: {
          hp: { base_stat: 35, stat: { name: 'hp' } },
          attack: { base_stat: 55, stat: { name: 'attack' } },
          defense: { base_stat: 40, stat: { name: 'defense' } },
          speed: { base_stat: 90, stat: { name: 'speed' } },
        },
      },
    ]);

    expect(API.get).toHaveBeenCalledWith('/pokemon/?limit=50');
    expect(API.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
  });

  it('should return empty array if base list is empty', async () => {
    API.get.mockResolvedValueOnce({ data: { results: [] } });

    const result = await getDetailedPokemonList();
    expect(result).toEqual([]);
  });

  it('should throw error if fetching base list fails', async () => {
    API.get.mockRejectedValueOnce(new Error('API down'));

    await expect(getDetailedPokemonList()).rejects.toThrow('API down');
  });

  it('should throw error if one of the detailed fetches fails', async () => {
    const mockBasicList = {
      data: {
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
        ],
      },
    };

    API.get
      .mockResolvedValueOnce(mockBasicList) // Base list
      .mockRejectedValueOnce(new Error('Detail fetch failed')); // Detail fails

    await expect(getDetailedPokemonList()).rejects.toThrow(
      'Detail fetch failed'
    );
  });
});
