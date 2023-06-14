const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {
  const values = new Set();

  // While loop to generate unique random values
  while (values.size < num) {
    // Generate random value from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;
    values.add(value);
  }

  // Convert the set of unique values to an array
  const uniqueValues = Array.from(values);

  // For loop to generate bars
  for (let i = 0; i < num; i += 1) {
    // Get the value at the current index
    const value = uniqueValues[i];

    // Create element "div" for the bar
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`;

    // Create element "label" for the bar value
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");
    barLabel.innerHTML = value;

    // Append label to the bar
    bar.appendChild(barLabel);

    // Append bar to the container
    container.appendChild(bar);
  }
}


// Asynchronous function to perform "Cocktail Sort"
async function CocktailSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");

  // Initialize swapped with true
  let swapped = true;

  // Initialize s with zero
  let s = 0;

  // Initialize e with 20
  let e = 20;

  while (swapped == true) {
    swapped = false;

    for (let i = s; i < e - 1; i++) {
      // Assigning value of ith bar into value1
      let value1 = parseInt(bars[i].childNodes[0].innerHTML);

      // Assigning value of i+1th bar into value2
      let value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Provide green color to the ith bar during comparison
      bars[i].style.backgroundColor = "green";

      // Provide green color to the i+1th bar during comparison
      bars[i + 1].style.backgroundColor = "green";

      if (value1 > value2) {
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Swap ith bar with (i+1)th bar
        bars[i].style.height = bars[i + 1].style.height;
        bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
        bars[i + 1].style.height = temp1;
        bars[i + 1].childNodes[0].innerText = temp2;

        // Set swapped
        swapped = true;

        // Provide red color to the ith bar after swap
        bars[i].style.backgroundColor = "red";

        // Provide red color to the i+1th bar after swap
        bars[i + 1].style.backgroundColor = "red";
      }

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Provide blue color to the ith bar after comparison
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";

      // Provide blue color to the i+1th bar after comparison
      bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
    }

    if (swapped == false) {
      break;
    }

    // Set swapped false
    swapped = false;

    e = e - 1;

    for (let i = e - 1; i >= s; i--) {
      // Assigning value of ith bar into value1
      let value1 = parseInt(bars[i].childNodes[0].innerHTML);

      // Assigning value of i+1th bar into value2
      let value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Provide green color to the ith bar during comparison
      bars[i].style.backgroundColor = "green";

      // Provide green color to the i+1th bar during comparison
      bars[i + 1].style.backgroundColor = "green";

      if (value1 > value2) {
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Swap ith bar with (i+1)th bar
        bars[i].style.height = bars[i + 1].style.height;
        bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
        bars[i + 1].style.height = temp1;
        bars[i + 1].childNodes[0].innerText = temp2;

        // Set swapped
        swapped = true;

        // Provide red color to the ith bar after swap
        bars[i].style.backgroundColor = "red";

        // Provide red color to the i+1th bar after swap
        bars[i + 1].style.backgroundColor = "red";
      }

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Provide blue color to the ith bar after comparison
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";

      // Provide blue color to the i+1th bar after comparison
      bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
    }
    s = s + 1;
  }

  for (let x = 0; x < 20; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Cocktail Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function
generatebars();

// Function to generate new random array
function generate() {
  window.location.reload();
}

// Function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Cocktail Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
