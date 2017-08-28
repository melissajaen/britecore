$(document).ready(function () {
  
    $('.drawer-menu').click(function () {
      $('.menu').animate({
        left: "0px"
      }, 200);

      $('body').animate({
        left: "285px"
      }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function () {
      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
    });
  



  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }



  $('.text_container').addClass("hidden");

  $('.text_container').click(function () {
    var $this = $(this);

    if ($this.hasClass("hidden")) {
      $(this).removeClass("hidden").addClass("visible");

    } else {
      $(this).removeClass("visible").addClass("hidden");
    }
  });



});