let toggle = false

let togglenav = function() {
    let sidebar = document.querySelector(".colors");
    let sidebarul = document.querySelector(".colors ul");
    let sidelinks = document.querySelectorAll(".colors button");

    if (toggle === false) {
        sidebarul.style.visibility = "visible";
        sidebar.style.width = "150px";
        
        let arrayLength = sidelinks.length;
        for (let i = 0; i < arrayLength; i++) {
            sidelinks[i].style.opacity = "1";
        }

        toggle = true;
    }

    else if (toggle === true) {
        sidebar.style.width = "0px";
        
        let arrayLength = sidelinks.length;
        for (let i = 0; i < arrayLength; i++) {
            sidelinks[i].style.opacity = "0";
        }

        toggle = false;
    }

}
const toggleColorblue = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("blue-background");
    bodyElement.classList.remove("orange-background", "red-background", "green-background");
};

const attachEventToChangeColorButtonblue = function() {
    const changeColorButton = document.getElementById("blue");
    changeColorButton.addEventListener("click", function() {
        toggleColorblue();
        
    });
};

const toggleColorgreen = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("green-background");
    bodyElement.classList.remove("orange-background", "red-background", "blue-background");
};
const attachEventToChangeColorButtongreen = function() {
    const changeColorButton = document.getElementById("green");
    changeColorButton.addEventListener("click", function() {
        toggleColorgreen();    
    });
};

const toggleColorred = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
    bodyElement.classList.remove("orange-background", "blue-background", "green-background");
}    
const attachEvenToChangeColorButtonred = function() {
    const changeColorButton = document.getElementById("red");
    changeColorButton.addEventListener("click", function() {
        toggleColorred();
    });
}

const toggleColororange = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("orange-background");
    bodyElement.classList.remove("blue-background", "red-background", "green-background");
}
const attachEvenToChangeColorButtonorange = function() {
    const changeColorButton = document.getElementById("orange");
    changeColorButton.addEventListener("click", function() {
        toggleColororange();
    });
};

attachEvenToChangeColorButtonred();
attachEvenToChangeColorButtonorange();
attachEventToChangeColorButtongreen();
attachEventToChangeColorButtonblue();


