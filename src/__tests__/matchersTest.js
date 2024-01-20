import sortHeroesHealthStatus from '../matchers';

test.each([
  [
    'like in matchers.js',
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    'with the same values of two heroes',
    [
      { name: 'мечник', health: 80 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 80 },
      { name: 'лучник', health: 80 },
    ],
  ],
])('descendent sorting of heroes status %s', (_, heroesHealthArr, expected) => {
  expect(sortHeroesHealthStatus(heroesHealthArr)).toEqual(expected);
});
