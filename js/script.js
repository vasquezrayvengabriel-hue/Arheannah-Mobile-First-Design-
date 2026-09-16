/* =========================================================
   ARHEANNAH DELFINO PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {


    /* -----------------------------------------
       OPEN / CLOSE MENU
    ----------------------------------------- */

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");


        const isOpen =
            navMenu.classList.contains("active");


        /* Update accessibility state */

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        /* Change hamburger icon */

        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }

    });


    /* -----------------------------------------
       CLOSE MENU AFTER CLICKING A LINK
    ----------------------------------------- */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }


            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (!menuToggle || !navMenu) {

        return;

    }


    const clickedInsideMenu =
        navMenu.contains(event.target);


    const clickedToggle =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        navMenu.classList.remove("active");


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
/* =========================================================
   CONTACT MESSAGE FORM
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {

            /*
             * Prevent the browser from
             * refreshing the page.
             */

            event.preventDefault();


            /* Get form values */

            const name =
                document.getElementById("name")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const subject =
                document.getElementById("subject")?.value.trim() || "";

            const message =
                document.getElementById("message")?.value.trim() || "";


            /* -----------------------------------------
               BASIC VALIDATION
            ----------------------------------------- */

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please complete all the fields before sending your message."
                );

                return;

            }


            /* -----------------------------------------
               EMAIL VALIDATION
            ----------------------------------------- */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            /* -----------------------------------------
               PREPARE EMAIL
            ----------------------------------------- */

            const recipient =
                "arheannah.delfino@example.com";


            const emailSubject =
                encodeURIComponent(
                    subject
                );


            const emailBody =
                encodeURIComponent(

                    "Hello Arheannah,\n\n" +

                    "Name: " +
                    name +
                    "\n" +

                    "Email: " +
                    email +
                    "\n\n" +

                    "Message:\n" +
                    message

                );


            /*
             * Open the user's email application.
             */

            window.location.href =
                "mailto:" +
                recipient +
                "?subject=" +
                emailSubject +
                "&body=" +
                emailBody;

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    new Date().getFullYear();


const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach(function (element) {

    element.textContent =
        currentYear;

});


/* =========================================================
   PAGE LOADED MESSAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
