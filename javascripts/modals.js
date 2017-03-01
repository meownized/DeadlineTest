//test
console.log("Мне еще никогда не было так стыдно за написанное мной");
console.log("1");

//get the modal

var modalparent = document.getElementsByClassName("modal_multi");

//get the button/li that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

//get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

//when the someone clicks the button, open the modal
function setDataIndex()
{
  for (i = 0; i < modal_btn_multi.length; i++)
   {
    modal_btn_multi[i].setAttribute('data-index', i);
    modalparent[i].setAttribute('data-index', i);
    span_close_multi[i].setAttribute('data-index', i);
   }
}

//test
console.log("2");

window.onload = function() {
  setDataIndex();
};

window.onclick = function(event) {
  var modal = modalparent[event.target.getAttribute('data-index')]
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//test
console.log("3");

for (i = 0; i < modal_btn_multi.length; i++)  {

  modal_btn_multi[i].onclick = function() {
  var ElementIndex = this.getAttribute('data-index');
  modalparent[ElementIndex].style.display = "block";
  };

  //when someone clicks on span (x), close the modal
  span_close_multi[i].onclick = function() {
  var ElementIndex = this.getAttribute('data-index');
  modalparent[ElementIndex].style.display = "none";
  };
}
