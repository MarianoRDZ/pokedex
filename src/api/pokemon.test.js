import API from './axios';
import { vi } from 'vitest';
import { getPokemonList, getDetailedPokemonList } from './pokemon';

vi.mock('./axios');

describe('getPokemonList', () => {
  beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of pokemons', async () => {
    const mockResponse = {
      data: {
        results: [{ name: 'bulbasaur', url: 'pokemon_url' }],
      },
    };

    API.get.mockResolvedValue(mockResponse);

    const result = await getPokemonList(20);

    expect(result).toEqual([{ name: 'bulbasaur', url: 'pokemon_url' }]);
    expect(API.get).toHaveBeenCalledWith('/pokemon?limit=20');
  });

  it('should throw an error if the API fails', async () => {
    API.get.mockRejectedValue(new Error('API down'));

    await expect(getPokemonList()).rejects.toThrow(
      'Hubo un problema al traer el listado de Pokemon'
    );
  });

  it('should return empty if no data is available', async () => {
    API.get.mockResolvedValue({ data: { results: [] } });

    const result = await getPokemonList();
    expect(result).toEqual([]);
  });

  it('should respect the custom limit', async () => {
    API.get.mockResolvedValue({ data: { results: [] } });

    await getPokemonList(10);
    expect(API.get).toHaveBeenCalledWith('/pokemon?limit=10');
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
      if (url === '/pokemon?limit=50') {
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
  });

  it('should return empty array if base list is empty', async () => {
    API.get.mockResolvedValueOnce({ data: { results: [] } });

    const result = await getDetailedPokemonList();
    expect(result).toEqual([]);
  });

  it('should throw an error if fetching base list fails', async () => {
    API.get.mockRejectedValueOnce(new Error('API down'));

    await expect(getDetailedPokemonList()).rejects.toThrow(
      'Hubo un problema al traer el listado de Pokemon'
    );
  });

  it('should skip failed detail fetches and return the rest', async () => {
    const mockBasicList = {
      data: {
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
          {
            name: 'missingno',
            url: 'https://pokeapi.co/api/v2/pokemon/missingno',
          },
        ],
      },
    };

    const mockPikachuDetail = {
      data: {
        name: 'pikachu',
        id: 25,
        types: [],
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
      if (url === '/pokemon?limit=50') {
        return Promise.resolve(mockBasicList);
      }
      if (url === 'https://pokeapi.co/api/v2/pokemon/pikachu') {
        return Promise.resolve(mockPikachuDetail);
      }
      if (url === 'https://pokeapi.co/api/v2/pokemon/missingno') {
        return Promise.reject(new Error('404'));
      }
    });

    const result = await getDetailedPokemonList(50);

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('pikachu');
  });
});
