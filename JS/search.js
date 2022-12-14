$(document).ready(function () {
 
  $("#searchBookBtn").on("click", function () { 
   const search = $("#searchBook").val();
   $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q='+search
   }).then(result => {
    if(result.totalItems == 0){
      $('.please').removeAttr('id');
    }else if (result.totalItems > 0){
      $(".carouselclass").removeAttr('id');
      $('.please').attr('id', 'd-none');
      $(".bookTitle0").html(result.items[0].volumeInfo.title);
      $(".author0").html(result.items[0].volumeInfo.authors[0]);
      $(".desc0").html(result.items[0].volumeInfo.description);
      $(".poster0").attr('src', result.items[0].volumeInfo.imageLinks.smallThumbnail);

      $(".bookTitle1").html(result.items[1].volumeInfo.title);
      $(".author1").html(result.items[1].volumeInfo.authors[1]);
      $(".desc1").html(result.items[1].volumeInfo.description);
      $(".poster1").attr('src', result.items[1].volumeInfo.imageLinks.smallThumbnail);

      $(".bookTitle2").html(result.items[2].volumeInfo.title);
      $(".author2").html(result.items[2].volumeInfo.authors[2]);
      $(".desc2").html(result.items[2].volumeInfo.description);
      $(".poster2").attr('src', result.items[2].volumeInfo.imageLinks.smallThumbnail)};
   })
  })
})