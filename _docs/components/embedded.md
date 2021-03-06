--- 
layout: docs 
title: Embedded 
description: Embedded description 
group: components 
--- 
## Example 1 ## 

{% example html %}

<div class="env-embedded" style="width:20em">
   <div class="env-embedded__img-container">
      <img class="env-embedded__img" alt="Image alternative" src="https://placehold.it/640x480.png">
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text env-text--muted env-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder.</p>
      <button type="button" class="env-button env-button--primary">Lorem ipsum</button>
   </div>
</div>

{% endexample %} 

## Example 2 ##

Uses `env-embedded--horizontal` and `env-embedded__img`.
Use `env-embedded__img-container--right` to align image to the right. 

{% example html%}

<div class="env-embedded env-embedded--horizontal">
   <div class="env-embedded__img-container">
      <img class="env-embedded__img" alt="Image alternative" src="https://placehold.it/270x180.png">
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text env-embedded__title">Lorem ipsum</h4>
      <p class="env-embedded__text env-text env-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

<br />

<div class="env-embedded env-embedded--horizontal">
   <div class="env-embedded__img-container env-embedded__img-container--right">
      <img class="env-embedded__img" alt="Image alternative"
         src="https://placehold.it/270x180.png">
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text env-embedded__title">Lorem ipsum</h4>
      <p class="env-embedded__text env-text env-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

{% endexample %} 

## Example 3 ## 

{% example html %}

<div class="env-embedded">
   <div class="env-embedded__img-container">
      <img class="env-embedded__img" alt="Image alternative" src="https://placehold.it/769x180.png">
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-embedded__text env-text env-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin. Jowl pastrami drumstick pig, beef jerky chicken ham hock salami.</p>
   </div>
</div>

{% endexample %}

## Example 4 ## 

Uses `env-embedded__block--overlay` to position text on top of image.
You can align text to left or right with `env-embedded__block--overlay--left` or `*--right` 

{% example html %}

<div class="env-embedded env-embedded--cover">
   <div class="env-embedded__img-container">
      <img class="env-embedded__img" alt="Image alternative" src="https://placehold.it/769x180.png">
   </div>
   <div class="env-embedded__block--overlay">
      <h4 class="env-text env-embedded__title">Lorem ipsum</h4>
      <p class="env-text env-text--muted env-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

{% endexample %}

