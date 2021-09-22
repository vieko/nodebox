const library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three',
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003',
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952',
    },
  },
  playlists: {
    p01: {id: 'p01', name: 'Coding Music', tracks: ['t01', 't02']},
    p02: {id: 'p02', name: 'Other Playist', tracks: ['t03']},
  },
}

const debug = false

const studentGrades = [2, 4, 4, 4, 5, 5, 7, 9]

const getStandardDeviation = (grades) => {
  // 1. get the mean or average
  let mean = 0
  for (i = 0; i < grades.length; i++) {
    mean = mean + grades[i]
  }
  mean = mean / grades.length
  console.log('DEBUG - mean', mean)
  // 2. get deviation of each grade and square it
  const deviations = []
  for (i = 0; i < grades.length; i++) {
    // each grade minus the mean to the power of two
    // push results to array
    deviations.push(Math.pow(grades[i] - mean, 2))
  }
  console.log('DEBUG - deviations', deviations)
  // 3. get variance
  let variance = 0
  for (i = 0; i < grades.length; i++) {
    variance = variance + deviations[i]
  }
  variance = variance / deviations.length
  console.log('DEBUG - variance', variance)
  // 4. get square root of variance
  const sqrt = Math.sqrt(variance)
  console.log('DEBUG - sqrt', sqrt)
  // 5. profit!
  return sqrt
}

console.log(
  'RESULTS :: getStandardDeviation()',
  getStandardDeviation(studentGrades),
)

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = (data) => {
  const lists = data.playlists
  const keys = Object.keys(lists)
  const results = keys.map(
    (k) =>
      `${lists[k].id}: ${lists[k].name} - ${lists[k].tracks.length} tracks`,
  )
  return results
}

if (debug) {
  console.log('------------------------')
  console.log('RESULTS :: All Playlists')
  console.log('------------------------')
  printPlaylists(library).forEach((item) => console.log(item))
  console.log('\n')
}

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = (data) => {
  const tracks = data.tracks
  const keys = Object.keys(tracks)
  const results = keys.map(
    (k) =>
      `${tracks[k].id}: ${tracks[k].name} by ${tracks[k].artist} (${tracks[k].album})`,
  )
  return results
}

if (debug) {
  console.log('---------------------')
  console.log('RESULTS :: All Tracks')
  console.log('---------------------')
  printTracks(library).forEach((item) => console.log(item))
  console.log('\n')
}

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {

// }

// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {

// }

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }

// adds a track to the library
// const addTrack = function(name, artist, album) {

// }

// adds a playlist to the library
// const addPlaylist = function(name) {

// }

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }
