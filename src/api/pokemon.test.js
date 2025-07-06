import API from './axios';
import { getPokemonList } from './pokemon';

vi.mock('./axios');

describe('getPokemonList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of pokemons', async () => {
    const mockResponse = {
      data: {
        results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/1' }],
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
