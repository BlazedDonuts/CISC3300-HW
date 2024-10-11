const listItems = document.querySelectorAll("li");

function changeColorToBlue() {
    listItems.forEach(item => {
        item.style.color = "blue";
    });
}

listItems.forEach(item => {
    item.addEventListener("click", changeColorToBlue);

});

//cats array
const cats = [
    { name: 'Charlie', 
        adoptionStatus: 'available' 
    },
    { name: 'Lily', 
        adoptionStatus: 'not-available' 
    },
    { name: 'Coco', 
        adoptionStatus: 'available' 
    },
    { name: 'Oreo', 
        adoptionStatus: 'not-available' 
    },
    { name: 'Luna', 
        adoptionStatus: 'available' 
    },
    { name: 'Milo', 
        adoptionStatus: 'available' 
    },
    { name: 'Lola', 
        adoptionStatus: 'not-available' 
    },
    { name: 'Leo', 
        adoptionStatus: 'available' 
    },
    { name: 'Willow', 
        adoptionStatus: 'available' 
    },
    { name: 'Bella', 
        adoptionStatus: 'not-available' 
    },
    { name: 'Max', 
        adoptionStatus: 'available' 
    },
    { name: 'Cleo', 
        adoptionStatus: 'available' 
    },
    { name: 'Lucy', 
        adoptionStatus: 'not-available' 
    },
    { name: 'Daisy', 
        adoptionStatus: 'available' 
    },
];

const catsList = document.getElementById("cats-list");

cats.forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat.name;
    catsList.appendChild(li);
});

//form
const form = document.getElementById("blah");
const input = document.getElementById("userInput");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    messageDiv.textContent = "";
    if(input.value.trim() === "") {
        messageDiv.textContent = "Please Provide a Value";
        messageDiv.style.backgroundColor = "red";
    }
    else {
        messageDiv.textContent = "Success";
        messageDiv.style.backgroundColor = "green";
        console.log(input.value);
    }
});
