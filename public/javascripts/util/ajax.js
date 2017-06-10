class Ajax {
  static getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        callback(JSON.parse(this.responseText));
      } else {
        console.error(`Error with GET, url: ${url}`);
      }
    };
    xhr.send();
  }

  static updatePlaylist(toPost, url) {
    let sending = `${url}?playlist=${encodeURIComponent(toPost.playlist)}`;
    sending += `&videoID=${encodeURIComponent(toPost.videoID)}`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', sending, true);
    // do something with onload
    // xhr.onload = function() .....
    xhr.send();
  }
}
