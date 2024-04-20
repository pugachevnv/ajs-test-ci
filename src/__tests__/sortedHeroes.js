import sortedHeroes from '../sortedHeroes';

const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ]

  test('the list should be sorted by health level', () => {
    const expected = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10}
    ]
    const result = sortedHeroes(heroes);
    expect(result).toEqual(expected);
  });