const study = require('express').Router();

const playlists = require('../../util').studyPlaylist;

study.get('/:playlist', (req, res) => {
  const playlist = req.params.playlist;
  if (playlist in playlists) {
    res.json(playlists[playlist]);
  } else {
    res.json({ status: 404, message: `Playlist "${playlist}" not found!` });
  }
});

module.exports = study;
