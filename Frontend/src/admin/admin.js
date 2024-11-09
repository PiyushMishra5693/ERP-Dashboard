
const manageSalesBtn = document.getElementById('manageSalesBtn');
const manageLabourBtn = document.getElementById('manageLabourBtn');
const viewLocationsBtn = document.getElementById('viewLocationsBtn');

const manageSalesSection = document.getElementById('manageSales');
const manageLabourSection = document.getElementById('manageLabour');
const viewLocationsSection = document.getElementById('viewLocations');

function showSection(section) {
  manageSalesSection.classList.remove('active');
  manageLabourSection.classList.remove('active');
  viewLocationsSection.classList.remove('active');

  section.classList.add('active');
}

manageSalesBtn.addEventListener('click', () => showSection(manageSalesSection));
manageLabourBtn.addEventListener('click', () => showSection(manageLabourSection));
viewLocationsBtn.addEventListener('click', () => showSection(viewLocationsSection));

let salesManagers = [];
let labours = [];
let locations = [];
function renderSalesManagers() {
  const list = document.getElementById('salesManagersList');
  list.innerHTML = '';
  salesManagers.forEach((manager, index) => {
    const div = document.createElement('div');
    div.classList.add('list-item');
    div.innerHTML = `
      <span>${manager.name} (Sales Target: $${manager.target})</span>
      <button class="delete-btn" onclick="deleteItem('salesManagers', ${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function renderLabours() {
  const list = document.getElementById('laboursList');
  list.innerHTML = '';
  labours.forEach((labour, index) => {
    const div = document.createElement('div');
    div.classList.add('list-item');
    div.innerHTML = `
      <span>${labour.name} (Hourly Rate: $${labour.rate})</span>
      <button class="delete-btn" onclick="deleteItem('labours', ${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function renderLocations() {
  const list = document.getElementById('locationsList');
  list.innerHTML = '';
  locations.forEach((location, index) => {
    const div = document.createElement('div');
    div.classList.add('list-item');
    div.innerHTML = `
      <span>${location.name} (Address: ${location.address})</span>
      <button class="delete-btn" onclick="deleteItem('locations', ${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}
function addSalesManager() {
  const name = prompt('Enter Sales Manager name:');
  const target = prompt('Enter Sales Target ($):');
  if (name && target && !isNaN(target) && target > 0) {
    salesManagers.push({ name, target });
    renderSalesManagers();
  } else {
    alert('Invalid input. Please try again.');
  }
}

function addLabour() {
  const name = prompt('Enter Labour name:');
  const rate = prompt('Enter Hourly Rate ($):');
  if (name && rate && !isNaN(rate) && rate > 0) {
    labours.push({ name, rate });
    renderLabours();
  } else {
    alert('Invalid input. Please try again.');
  }
}

function addLocation() {
  const name = prompt('Enter Location name:');
  const address = prompt('Enter Location address:');
  if (name && address) {
    locations.push({ name, address });
    renderLocations();
  } else {
    alert('Invalid input. Please try again.');
  }
}
function deleteItem(type, index) {
  if (confirm('Are you sure you want to delete this item?')) {
    if (type === 'salesManagers') {
      salesManagers.splice(index, 1);
      renderSalesManagers();
    } else if (type === 'labours') {
      labours.splice(index, 1);
      renderLabours();
    } else if (type === 'locations') {
      locations.splice(index, 1);
      renderLocations();
    }
  }
}
renderSalesManagers();
renderLabours();
renderLocations();
