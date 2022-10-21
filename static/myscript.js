
<script>
  document.addEventListener("DOMContentLoaded", function(){

    let monday =document.querySelector(".monday");
  let tuesday =document.querySelector(".tuesday");
  let wednesday =document.querySelector(".wednesday");
  let thursday =document.querySelector(".thursday");
  let friday =document.querySelector(".friday");
  let saturday =document.querySelector(".saturday");
  let sunday =document.querySelector(".sunday");

  let monday_content =document.querySelector(".monday-content");
  let tuesday_content =document.querySelector(".tuesday-content");
  let wednesday_content =document.querySelector(".wednesday-content");
  let thursday_content =document.querySelector(".thursday-content");
  let friday_content =document.querySelector(".friday-content");
  let saturday_content =document.querySelector(".saturday-content");
  let sunday_content =document.querySelector(".sunday-content");


  monday.addEventListener("click", function(){
  monday_content.style.display = "block";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "none";
  friday_content.style.display = "none";
  saturday_content.style.display = "none";
  sunday_content.style.display = "none";

  });
  tuesday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "block";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "none";
  friday_content.style.display = "none";
  saturday_content.style.display = "none";
  sunday_content.style.display = "none";

  });
  wednesday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "block";
  thursday_content.style.display = "none";
  friday_content.style.display = "none";
  saturday_content.style.display = "none";
  sunday_content.style.display = "none";

  });
  thursday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "block";
  friday_content.style.display = "none";
  saturday_content.style.display = "none";
  sunday_content.style.display = "none";

  });
  friday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "none";
  friday_content.style.display = "block";
  saturday_content.style.display = "none";
  sunday_content.style.display = "none";

  });
  saturday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "none";
  friday_content.style.display = "none";
  saturday_content.style.display = "block";
  sunday_content.style.display = "none";

  });
  sunday.addEventListener("click", function(){
    monday_content.style.display = "none";
  tuesday_content.style.display = "none";
  wednesday_content.style.display = "none";
  thursday_content.style.display = "none";
  friday_content.style.display = "none";
  saturday_content.style.display = "none";
  sunday_content.style.display = "block";

  });



});
</script>