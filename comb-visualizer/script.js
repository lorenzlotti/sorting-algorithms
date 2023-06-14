const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {
  const valuesSet = new Set(); // Create a Set to store unique values

  while (valuesSet.size < num) {
    const value = Math.floor(Math.random() * 100) + 1; // Generate a random value

    valuesSet.add(value); // Add the value to the Set
  }

  const valuesArray = Array.from(valuesSet); // Convert the Set to an array

  for (let i = 0; i < num; i += 1) {
    const value = valuesArray[i]; // Get the value from the array

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${value * 3}px`;

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// Function calculate_gap
function calculate_gap(gap) {
  gap = parseInt((gap * 10) / 13, 10);
  if (gap < 1) return 1;
  return gap;
}

// Asynchronous function to perform "Comb Sort"
async function CombSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");
  let gap = 20;
  let swapped = true;

  while (gap != 1 || swapped == true) {
    // Calling calculate_gap function
    gap = calculate_gap(gap);

    // Initializing swapped with false
    swapped = false;

    for (let i = 0; i < 20 - gap; i++) {
      // Assigning value of ith bar into value1
      let value1 = parseInt(bars[i].childNodes[0].innerHTML);

      // Assigning value of i+gapth bar into value2
      let value2 = parseInt(bars[i + gap].childNodes[0].innerHTML);

      // Provide green color to the ith bar during comparison
      bars[i].style.backgroundColor = "green";

      // Provide green color to the i+gapth bar during comparison
      bars[i + gap].style.backgroundColor = "green";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      if (value1 > value2) {
        // Provide red color to the ith bar
        bars[i].style.backgroundColor = "red";

        // Provide red color to the i+gapth bar
        bars[i + gap].style.backgroundColor = "red";

        // Swap ith bar with (i+gap)th bar
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );

        // Swap ith bar with (i+gap)th bar
        bars[i].style.height = bars[i + gap].style.height;
        bars[i].childNodes[0].innerText = bars[i + gap].childNodes[0].innerText;
        bars[i + gap].style.height = temp1;
        bars[i + gap].childNodes[0].innerText = temp2;

        // Set swapped
        swapped = true;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );
      }

      // Provide skyblue color to the ith bar after comparison
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";

      // Provide skyblue color to the i+gapth bar after comparison
      bars[i + gap].style.backgroundColor = "rgb(0, 183, 255)";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
    }
  }

  // Set all bars to the original blue color after sorting
  for (let x = 0; x < 20; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Comb Sort" after final(sorted)
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

  // To disable the button "Comb Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
