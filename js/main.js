"use strict";

let posts = [];
let selectedPost;
let ratings = [];
// Fetch wordpress files

fetch("http://idasteendahl.com/wordpress/wp-json/wp/v2/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    posts = json;
    //    appendPosts(json);
  });

/* function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    document.querySelector("#grid-posts").innerHTML += `
    <article class = "grid-item">
      <h2>${post.slug}</h2>
      <p>${post.content.rendered}</p>
      </article>
    `;
  }
} */

function showPost(slug) {
  for (let post of posts) {
    console.log(post);
    if (post.slug === slug) {
      selectedPost= post;
      document.querySelector("#grid-posts").innerHTML = `
    <article class = "grid-item">
      <h2>${post.title.rendered}</h2>
      <br>
      <p>${post.content.rendered}</p>
      </article>
    `;
    }
  }
}

function addRating(){
  console.log(selectedPost);
  let rating = {
    rating: $("#rateYo").rateYo("option", "rating"),
    slug: selectedPost.title.rendered
  }
  ratings.push(rating);
  console.log(ratings);
  if (ratings.length === 3){
    console.log("test1");

    for (let rating of ratings) {
      console.log(rating);
        document.querySelector("#grid-ratings").innerHTML += `
      <article class = "grid-item">
        <h4>${rating.slug}</h4>
        <p>Du har givet ${rating.slug} ${rating.rating} stjerner!</p>
        </article>
      `;
}
$('#ratingModal').modal('show');

}
 }


$('#exampleModal').on('show.bs.modal', function(event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(recipient)
  modal.find('.modal-body input').val(recipient)
  $("#rateYo").rateYo("option", "rating", 0);
})

/* Javascript */

//Make sure that the dom is ready
$(function() {

  $("#rateYo").rateYo({
    starWidth: "40px",
    rating: 1.5,
    halfStar: true
  });

});
