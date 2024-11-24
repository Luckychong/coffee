// Function to obtain data from the URL
const getData = async (url) => {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

// Function to display hot coffee menu with images
const displayHotCoffeeMenu = async () => {
  const data = await getData("https://api.sampleapis.com/coffee/hot");
  if (data) {
      const coffeeListElement = document.getElementById("coffee-list");

      // coffee title, image, and description
      coffeeListElement.innerHTML = "<ul>" + data.map(item => `
          <li>
              <h3>${item.title}</h3>
              <img src="${item.image}" alt="${item.title}" style="max-width: 150px;"/>
              <p>${item.description}</p>
          </li>`).join('') + "</ul>";
  }
  
};

// Creating a function to display iced coffee menu with images

const displayIcedCoffeeMenu = async () => {
  const data = await getData("https://api.sampleapis.com/coffee/iced");

  // Include iced coffee title, image, and description only if data is available
  if (data) {
      const coffeeListElement = document.getElementById("iced-coffee-list");

      // Include coffee title, image, and description
      coffeeListElement.innerHTML = "<ul>" + data.map(item => `
          <li>
              <h3>${item.title}</h3>
              <img src="${item.image}" alt="${item.title}" style="max-width: 150px;"/>
              <p>${item.description}</p>
          </li>`).join('') + "</ul>";
  }
  
};


if (window.location.pathname.endsWith("index.html")) {
  displayHotCoffeeMenu();
} else if (window.location.pathname.endsWith("iced.html")) {
  displayIcedCoffeeMenu();
}

