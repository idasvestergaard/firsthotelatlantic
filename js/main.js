"use strict";

// Fetch wordpress files

fetch("http://idasteendahl.com/wordpress/wp-json/wp/v2/posts?_embed&categories=2")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });


function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    document.querySelector("#grid-posts").innerHTML += `
    <article class = "grid-item">
      <h2>${post.title.rendered}</h2>
      <p>${post.content.rendered}</p>
      </article>
    `;
  }
}
