var posts=["2025/10/30/Hello-World/","2025/10/31/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };