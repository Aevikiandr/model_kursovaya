/* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.langbtn')) {

                var dropdowns = document.getElementsByClassName("lang-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                }
            }
        }

//////меню

        document.querySelector('.adaptiv').onclick = function(){
            document.querySelector('.menu').classList.toggle('open-menu')
        }
        document.querySelector('.close').onclick = function(){
            document.querySelector('.menu').classList.remove('open-menu');
            document.querySelector('body').style.overflow = 'visible';
        }