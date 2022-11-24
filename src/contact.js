import { clearPage, createNavBar } from '.';
import contactHeaderImg from './images/contact-header.jpg';

const createContactPage = () => {
  clearPage();

  const topDiv = document.querySelector('#content');

  topDiv.appendChild(createNavBar());

  const contactContainer = document.createElement('div');

  const contactHeader = document.createElement('header');
  contactHeader.classList.add('contact-header');
  contactHeader.style.backgroundImage = `url(${contactHeaderImg})`;
  contactContainer.appendChild(contactHeader);

  const contactHeadlineMsg = document.createElement('h1');
  contactHeadlineMsg.textContent = 'Drop Us a Line';
  contactHeader.appendChild(contactHeadlineMsg);

  const contactDisplay = document.createElement('div');
  contactDisplay.classList.add('contact-display');
  contactContainer.appendChild(contactDisplay);

  const contactForm = document.createElement('form');
  contactForm.classList.add('contact-form');
  contactDisplay.appendChild(contactForm);

  const contactTable = document.createElement('table');
  contactForm.appendChild(contactTable);

  const row1 = document.createElement('tr');
  contactTable.appendChild(row1);

  const row1Data1 = document.createElement('td');
  row1Data1.classList.add('form-label');
  row1.appendChild(row1Data1);

  const row1Data2 = document.createElement('td');
  row1.appendChild(row1Data2);
  const data2Text = document.createElement('h2');
  data2Text.textContent = 'How did we do?';
  row1Data2.appendChild(data2Text);

  const row2 = document.createElement('tr');
  contactTable.appendChild(row2);

  const row2Data1 = document.createElement('td');
  row2Data1.classList.add('form-label');
  row2.appendChild(row2Data1);

  const row2Label = document.createElement('label');
  row2Label.setAttribute('for', 'name');
  row2Label.textContent = 'Name:';
  row2Data1.appendChild(row2Label);

  const row2Data2 = document.createElement('td');
  row2.appendChild(row2Data2);

  const row2InputField = document.createElement('input');
  row2InputField.setAttribute('type', 'text');
  row2InputField.setAttribute('name', 'name');
  row2InputField.setAttribute('id', 'name');
  row2Data2.appendChild(row2InputField);

  const row3 = document.createElement('tr');
  contactTable.appendChild(row3);

  const row3Data1 = document.createElement('td');
  row3Data1.classList.add('form-label');
  row3.appendChild(row3Data1);

  const row3Label = document.createElement('label');
  row3Label.setAttribute('for', 'email');
  row3Label.textContent = 'Email:';
  row3Data1.appendChild(row3Label);

  const row3Data2 = document.createElement('td');
  row3.appendChild(row3Data2);

  const row3InputField = document.createElement('input');
  row3InputField.setAttribute('type', 'text');
  row3InputField.setAttribute('name', 'email');
  row3InputField.setAttribute('id', 'email');
  row3Data2.appendChild(row3InputField);

  const row4 = document.createElement('tr');
  contactTable.appendChild(row4);

  const row4Data1 = document.createElement('td');
  row4Data1.classList.add('form-label');
  row4.appendChild(row4Data1);

  const row4Label = document.createElement('label');
  row4Label.setAttribute('for', 'message');
  row4Label.textContent = 'Message:';
  row4Data1.appendChild(row4Label);

  const row4Data2 = document.createElement('td');
  row4.appendChild(row4Data2);

  const row4TextArea = document.createElement('textarea');
  row4TextArea.setAttribute('name', 'message');
  row4TextArea.setAttribute('id', 'message');
  row4TextArea.setAttribute('cols', '20');
  row4TextArea.setAttribute('rows', '10');
  row4Data2.appendChild(row4TextArea);

  const row5 = document.createElement('tr');
  contactTable.appendChild(row5);

  const row5Data1 = document.createElement('td');
  row5.appendChild(row5Data1);

  const row5Data2 = document.createElement('td');
  row5Data2.classList.add('form-label');
  row5Data2.classList.add('button');
  row5.appendChild(row5Data2);

  const row5ButtonContainer = document.createElement('div');
  row5ButtonContainer.classList.add('submit-button-div');
  row5Data2.appendChild(row5ButtonContainer);

  const row5Button = document.createElement('button');
  row5Button.classList.add('submit-form');
  row5Button.textContent = 'Submit';
  row5ButtonContainer.appendChild(row5Button);

  const addressContainer = document.createElement('div');
  addressContainer.classList.add('address-section');
  contactDisplay.appendChild(addressContainer);

  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'Find Us';
  addressContainer.appendChild(addressHeader);

  const street = document.createElement('p');
  street.textContent = '3224 Street Blvd';
  addressContainer.appendChild(street);

  const cityState = document.createElement('p');
  cityState.textContent = 'City, State';
  addressContainer.appendChild(cityState);

  const zipCode = document.createElement('p');
  zipCode.textContent = 'Zip Code';
  addressContainer.appendChild(zipCode);

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '000-000-0000';
  addressContainer.appendChild(phoneNumber);

  const operatingHoursContainer = document.createElement('div');
  operatingHoursContainer.classList.add('operating-hours');
  contactDisplay.appendChild(operatingHoursContainer);

  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';
  operatingHoursContainer.appendChild(hoursHeader);

  const monFriHours = document.createElement('p');
  const monFriSpan = document.createElement('span');
  monFriSpan.textContent = 'Monday - Friday:';
  monFriHours.appendChild(monFriSpan);
  const monFriHoursOpen = document.createTextNode(' 10:00 am - 11:00 pm');
  monFriHours.appendChild(monFriHoursOpen);
  operatingHoursContainer.appendChild(monFriHours);

  const satHours = document.createElement('p');
  const satSpan = document.createElement('span');
  satSpan.textContent = 'Saturday:';
  satHours.appendChild(satSpan);
  const satHoursOpen = document.createTextNode(' 9:00 am - 11:30 pm');
  satHours.appendChild(satHoursOpen);
  operatingHoursContainer.appendChild(satHours);

  const sunHours = document.createElement('p');
  const sunSpan = document.createElement('span');
  sunSpan.textContent = 'Sunday:';
  sunHours.appendChild(sunSpan);
  const sunHoursOpen = document.createTextNode(' 9:00 am - 9:00 pm');
  sunHours.appendChild(sunHoursOpen);
  operatingHoursContainer.appendChild(sunHours);

  topDiv.appendChild(contactContainer);
};

export { createContactPage };
