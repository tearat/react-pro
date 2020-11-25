import toCapitalizeFirstLetter from './textHelpers';

describe('textHelpers', () => {
  test('1. toCapitalizeFirstLetter must capitalize first letter (thanks Captain!)', () => {
    expect(toCapitalizeFirstLetter('pikachu')).toEqual('Pikachu');
  });
});
