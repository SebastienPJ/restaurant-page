import { clearPage, createNavBar } from '.';

const createContactPage = () => {
  clearPage();

  const topDiv = document.querySelector('#content');

  topDiv.appendChild(createNavBar());

  const contactContainer = document.createElement('div');

  contactContainer.innerHTML = `    
  <header class="contact-header">
    <h1>Drop Us a Line</h1>
  </header>

  <div class="contact-display">
    <form action="" class="contact-form">

      <table>
        <tr>
          <td class="form-label">
          </td>
          <td>
            <h2 class="form-header">How did we do?</h2>
          </td>
        </tr>


        <tr>
          <td class="form-label">
            <label for="name">Name:</label>
          </td>
          <td>
            <input type="text" name="name" id="name" required>
          </td>
        </tr>

        <tr>
          <td class="form-label">
            <label for="email">Email:</label>
          </td>
          <td>
            <input type="text" name="email" id="email" required>
          </td>
        </tr>


        <tr>
          <td class="form-label">
            <label for="message">Message:</label>
          </td>
          <td>
            <textarea name="message" id="message" cols="20" rows="10" required></textarea>
          </td>
        </tr>


        <tr>
          <td>
          </td>

          <td class="form-label button">
            <div class="submit-button-div">
              <button class="submit-form">Submit</button>
            </div>
          </td>

        </tr>

      </table>

    
    </form>


    <div class="address-section">
      <h2>Find us:</h2>
      <p>3224 Street Blvd</p>
      <p>City, State</p>
      <p>Zip Code</p>
      <p>000-000-0000</p>
    </div>


    <div class="operating-hours">
      <h2> Hours</h2>
      <p> <span>Monday - Friday:</span> 10:00 am - 11:00 pm</p>
      <p> <span>Saturday:</span> 9:00 am - 11:30 pm</p>
      <p> <span>Sunday</span> 9:00 am - 9:00 pm</p>
    
    </div>

  </div>`;

  topDiv.appendChild(contactContainer);

  const contactHeader = document.querySelector('.contact-header');
  contactHeader.style.backgroundImage = "url('./img/contact-header.jpg')";
};

export { createContactPage };
