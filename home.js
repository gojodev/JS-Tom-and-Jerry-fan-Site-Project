// Emmanuel Koledoye - Comp1C-Y
function fav_char() {
    "use strict";
    var fav_char_text = document.getElementById("fav_character_input").value;
    document.getElementById("fav_character_output").innerHTML = fav_char_text;
}

var THREE_CHARACTERS = 3;

function game() {
    "use strict";
    var fav_char = [
        {
            'name': 'Tom',
            'weight': "54.43kg",
            'height': "91.44cm",
            'img_src': "images/tom.jpg"
        },
        {
            'name': 'Jerry',
            'weight': "0.25kg",
            'height': "7.62cm",
            "img_src": "images/jerry.jpg"
        },
        {
            'name': 'Spike',
            'weight': "26.45kg",
            'height': "48.26cm",
            "img_src": "images/spike.png"
        }
    ];

    var index = Math.floor(Math.random() * THREE_CHARACTERS);

    var info = fav_char[index];
    var name = info.name;
    var weight = info.weight;
    var height = info.height;
    var img_src = info.img_src;

    document.getElementById("char_name").innerHTML = name;
    document.getElementById("char_weight").innerHTML = weight;
    document.getElementById("char_height").innerHTML = height;
    document.getElementById("char_img").src = img_src;
}

var toggle = 0;
function nav_drop_down() {
    "use strict";
    if (toggle === 0) {
        document.getElementById('sub-menu').style.opacity = '0';
        document.getElementById('sub-menu').style.transition = "0.2s";
        toggle = 1;
    }
    else {
        document.getElementById('sub-menu').style.opacity = '1';
        document.getElementById('sub-menu').style.transition = "0.2s";
        toggle = 0;
    }
}

function ratings() {
    "use strict";
    var ratings = Number(document.getElementById('rating').value);
    if (1 <= ratings && ratings <= 5) {
        document.getElementById('rating-text').innerHTML = ":(";
        document.getElementById('rating-value').innerHTML = `${ratings}`;
    }
    else if (6 <= ratings && ratings <= 8) {
        document.getElementById('rating-value').innerHTML = `${ratings}`;
        document.getElementById('rating-text').innerHTML = "That's decent";
    }
    else {
        document.getElementById('rating-value').innerHTML = `${ratings}`;
        document.getElementById('rating-text').innerHTML = "SSSIIIIUUUUU!!!!!";
    }
}

function img_hover() {
    "use strict";
    var all_img_src = ["images/tom.jpg", "images/jerry.jpg", "images/spike.png"];
    var index = Math.floor(Math.random() * THREE_CHARACTERS);
    var img_src = all_img_src[index];
    document.getElementById('img-change').src = img_src;
}