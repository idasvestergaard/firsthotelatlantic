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

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})