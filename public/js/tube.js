const ytlist = require('youtube-playlist');
 
const url = 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704';
 

ytlist(url, 'url').then(res => {
  console.log(res);
  /* Object
  { data:
   { playlist:
      [ 'https://youtube.com/watch?v=bgU7FeiWKzc',
        'https://youtube.com/watch?v=3PUVr8jFMGg',
        'https://youtube.com/watch?v=3pXVHRT-amw',
        'https://youtube.com/watch?v=KOVc5o5kURE' ] } }
   */
});
    