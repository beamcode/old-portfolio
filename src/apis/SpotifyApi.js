// import querystring from 'query-string'

// // const {
// //     SPOTIFY_CLIENT_ID: client_id,
// //     SPOTIFY_CLIENT_SECRET: client_secret,
// //     SPOTIFY_REFRESH_TOKEN: refresh_token,
// // } = process.env

// const client_id = "4b3d569ffcb84c518a801bfb569b369a";
// const client_secret = "48b60ffd27774a13aa0fdddb180ae5a2";
// const refresh_token = "AQBsPU_65_GzggYcraB6UEbzepnbkbCD-uf38m4oWY77ZzM8FQYFYDwUdnEtPMT4W-s--pe-yw9M_1ToAQwAlA3GM8TkkkbJCbYycGoBdg7XSpJQisXodJWGvZM1hOR-60i_VbNSTkVrWTxwAQGvcPoHkpvwTDIIGsJR6NgkEEYBi12551iaQV5B6EfKQo9AddRYV9N4HHuGz7b0j8uUwa4rjfXPrd05l5-ywx809ya9ZMR-W08mEnPfvZDxMkCQNs4gLjPOunbGs5pU";

// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

// async function getAccessToken() {
//     const response = await fetch(TOKEN_ENDPOINT, {
//         method: 'POST',
//         headers: {
//             Authorization: `Basic ${basic}`,
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: querystring.stringify({
//             grant_type: 'refresh_token',
//             refresh_token
//         }),
//     })

//     return response.json()
// }

// async function getNowPlaying() {
//     const { access_token } = await getAccessToken()

//     return fetch(NOW_PLAYING_ENDPOINT, {
//         headers: {
//             Authorization: `Bearer ${access_token}`,
//         }
//     })
// }

// export default async function GetSong(_, res) {
//     const response = await getNowPlaying()

//     // if (response.status === 204 || response.status > 400) {
//     //     return res.status(200).json({ isPlaying: false })
//     // }

//     const song = await response.json()
//     const isPlaying = song.is_playing
//     const title = song.item.name
//     const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
//     const album = song.item.album.name
//     const albumImageUrl = song.item.album.images[0].url
//     const songUrl = song.item.external_urls.spotify

//     console.log(song)
//     // return res.status(200).json({
//     //     album,
//     //     albumImageUrl,
//     //     artist,
//     //     isPlaying,
//     //     songUrl,
//     //     title,
//     // })
//     return (<></>)
// }