const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    const actual = cinema.titlesOfFilms(films);
    assert.deepStrictEqual(actual, expected);
  });



  it('should be able to find a film by title', function () {
    const expected = dunkirk
    const actual = cinema.findFilmByTitle('Dunkirk')
    assert.strictEqual(actual, expected)
  });



  it ('should be able to filter by property', function () {
    const expectedByGenre = [bladeRunner];
    const expectedByYear = [blackPanther];
    const actualByGenre = cinema.filterByProperty('genre', 'sci-fi');
    const actualByYear = cinema.filterByProperty('year', 2018);
    assert.deepStrictEqual(actualByGenre, expectedByGenre);
    assert.deepStrictEqual(actualByYear, expectedByYear);
  });


  it('should be able to check whether there are some films from a particular year', function () {
      const expected = true;
      const actual = cinema.checkFilmsByYear(2017)
      assert.strictEqual(actual, expected)
  });


  it('should be able to check whether there are no films from a particular year', function () {
    const expected = false;
    const actual = cinema.checkFilmsByYear(1)
    assert.strictEqual(actual, expected)
  });


  it('should be able to check whether all films are over a particular length', function () {
    const expected = true;
    const actual = cinema.checkFilmOverLength(95)
    assert.strictEqual(actual, expected)
  });


  it('should be able to calculate total running time of all films', function () {
    const expected = 622;
    const actual = cinema.totalRunningLength()
    assert.strictEqual(actual, expected)
  });

});
