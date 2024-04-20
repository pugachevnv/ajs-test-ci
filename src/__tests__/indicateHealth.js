import indicateHealth from '../indicate';

test('health more than 50', () => {
  const result = indicateHealth({name: 'Маг', health: 100});
  expect(result).toBe('healthy');
});

test('health less than 50 and more than 15', () => {
  const result = indicateHealth({name: 'лучник', health: 40});
  expect(result).toBe('wounded');
});

test('health less than 15 and not 0', () => {
  const result = indicateHealth({name: 'мечник', health: 10});
  expect(result).toBe('critical');
});
