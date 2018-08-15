const playlist = {'iron maiden': 'drifter'}

function updatePlaylist(playlist, artistName, songTitle){ 
  //playlist[artistName] = songTitle
  return {...playlist,
          artistName: 'songTitle'
          }
}