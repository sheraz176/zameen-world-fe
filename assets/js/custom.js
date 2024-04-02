let open_close_properties=document.getElementById('toggleButton');
let properties_list=document.querySelector('.hide-show-prop');
if(open_close_properties){
open_close_properties.addEventListener('click', () => {
    if (open_close_properties.innerText == 'Open') {
        open_close_properties.innerText = "Close";
        properties_list.style.display="none";
    } else {
        open_close_properties.innerText = "Open";
        properties_list.style.display="block";
    }
});
}

let list_view=document.getElementById('list-view');
let grid_view=document.getElementById('grid-view');
let properties_cards=document.querySelectorAll('.properties-cards');

if(list_view){
    list_view.addEventListener('click',()=>{
        list_view.classList.add('active');
        grid_view.classList.remove('active');
        properties_cards.forEach((single_prop)=>{
            single_prop.classList.add('active');
       })
    })
}
if(grid_view){
    grid_view.addEventListener('click',()=>{
        list_view.classList.remove('active');
        grid_view.classList.add('active');
        properties_cards.forEach((single_prop)=>{
            single_prop.classList.remove('active');
       })
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    autoplay: {
        delay: 3500,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  window.onscroll = function() {scrollFunction()};

  var header = document.querySelector('.hide-on-scroll');

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
}

// Keep track of the currently open dropdown
let openDropdown = null;

let zameen_dropdpwn_wrapper = document.querySelectorAll('.zameen-dropdpwn-wrapper');

zameen_dropdpwn_wrapper.forEach((single_dropdwon) => {
    let dropdown_data = single_dropdwon.querySelector('.dropdown-data');
    let input_container = single_dropdwon.querySelector('.input-container');

    input_container.addEventListener('click', (event) => {
        event.stopPropagation();

        // Close the currently open dropdown, if any
        if (openDropdown && openDropdown !== dropdown_data) {
            openDropdown.classList.remove("active");
        }

        // Toggle the clicked dropdown
        dropdown_data.classList.toggle("active");

        // Update the currently open dropdown
        openDropdown = dropdown_data;
    });

    document.body.addEventListener('click', (event) => {
        if (!single_dropdwon.contains(event.target)) {
            dropdown_data.classList.remove("active");
        }
    });

    // Add event listener to close dropdown when clicking on any radio button
    let radioButtons = single_dropdwon.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            dropdown_data.classList.remove("active");
        });
    });
});

let roll_wrapper = document.querySelectorAll('.roll-wrapper');

roll_wrapper.forEach((single_roll_wrapper) => {
    let rol_btn = single_roll_wrapper.querySelector('.rol-btn');
    let roll_dropdown = single_roll_wrapper.querySelector('.roll-dropdown');
    let close_roll_dropdwon = single_roll_wrapper.querySelector('.close-roll-dropdwon');
    
    rol_btn.addEventListener('click',()=>{
        roll_dropdown.classList.toggle("active");
    });

    close_roll_dropdwon.addEventListener('click',()=>{
        roll_dropdown.classList.add("active");
    });

    // Close dropdown when clicking outside
    document.body.addEventListener('click', (event) => {
        if (!single_roll_wrapper.contains(event.target)) {
            roll_dropdown.classList.add("active");
        }
    });
});

let sibling_btn = document.querySelector('.sibling_btn');
let sibling = document.querySelector('.sibling');

if (sibling) {
    sibling_btn.addEventListener('click', () => {
        sibling.classList.toggle('width-toggle');
    })
}



