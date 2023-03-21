const selectDays = document.querySelector('.select-days');
const selectMonth = document.querySelector('.select-month');
const selectYears = document.querySelector('.select-years');
const selectCountries = document.querySelector('.select-countries')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirmPassword')
const firstName = document.querySelector('.first__name')
const lastName = document.querySelector('.last__name')
const male = document.querySelector('.male')
const female = document.querySelector('.female')
const finishReg = document.querySelector('.content__justify')
const img = document.querySelector('.content__block--block-img')


const year = [
  {
    month: 'january',
    monthNumber: 0,
    days: 31
  },
  {
    month: 'february',
    monthNumber: 1,
    days: 28
  },
  {
    month: 'march',
    monthNumber: 2,
    days: 31
  },
  {
    month: 'april',
    monthNumber: 3,
    days: 30
  },
  {
    month: 'may',
    monthNumber: 4,
    days: 31
  },
  {
    month: 'June',
    monthNumber: 5,
    days: 30
  },
  {
    month: 'july',
    monthNumber: 6,
    days: 31
  },
  {
    month: 'august',
    monthNumber: 7,
    days: 31
  },
  {
    month: 'september',
    monthNumber: 8,
    days: 30
  },
  {
    month: 'october',
    monthNumber: 9,
    days: 31
  },
  {
    month: 'november',
    monthNumber: 10,
    days: 30
  },
  {
    month: 'december',
    monthNumber: 11,
    days: 30
  },

];
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
];


const removeOptions = (selector) => {
  selector.options.length = 0

}

const setDays = (monthIndex = 0) => {
  for (let i = 1; i <= year[monthIndex].days; i++) {
    const option = document.createElement('option')
    option.textContent = i;
    option.value = i;
    selectDays.add(option)
  }
}

const resetDays = (monthIndex) => {
  removeOptions(selectDays)
  setDays(monthIndex)
}

selectCountries.addEventListener('click', () => {
  if (selectCountries.options.length) {
    return
  }
  removeOptions(selectCountries);
  for (let i = 0; i <= countries.length; i++) {
    const option = document.createElement('option')
    option.textContent = countries[i]
    selectCountries.add(option)
  }

})

selectDays.addEventListener('click', () => {
  if (selectDays.options.length) {
    return
  }
  removeOptions(selectDays);

  setDays()
})


selectMonth.addEventListener('change', (event) => {
  resetDays(event.target.value)
})

selectMonth.addEventListener('click', () => {
  if (selectMonth.options.length) {
    return
  }
  removeOptions(selectMonth);

  for (let i = 0; i < 12; i++) {
    const option = document.createElement('option')
    option.textContent = year[i].month
    option.value = i;
    selectMonth.add(option)
  }

})

selectYears.addEventListener('click', () => {
  if (selectYears.options.length) {
    return
  }
  removeOptions(selectYears);

  for (let i = 0; i <= 123; i++) {
    const option = document.createElement('option')
    option.textContent = i + 1900
    selectYears.add(option)
  }
})

let ChangeInput = (HTMLel) => {
  HTMLel.addEventListener('change', () => {
    HTMLel.className = `content__wrapper--input ${HTMLel}`;
  })
}

let emailCheked;
email.addEventListener('change', () => {
  email.className = 'content__wrapper--input email';
  emailCheked = false;
})

ChangeInput(firstName);
ChangeInput(lastName);
ChangeInput(selectCountries);
ChangeInput(selectDays);
ChangeInput(selectMonth);
ChangeInput(selectYears);

password.addEventListener('change', () => {
  password.className = 'content__wrapper--input password'
  confirmPassword.className = 'content__wrapper--input confirm'
})

confirmPassword.addEventListener('change', () => {
  password.className = 'content__wrapper--input password'
  confirmPassword.className = 'content__wrapper--input confirm'
})

let checked1;
let checked2;
male.addEventListener('click', () => {
  checked1 = true;
})

female.addEventListener('click', () => {
  checked2 = true;
})

const button = document.querySelector('.content__wrapper--button')
button.addEventListener('click', () => {
  if ((![email.value][0].includes('@' && '.' && ('ru' || 'com')))) {
    email.className = 'error'
  } else {
    emailCheked = true;
  }

  const funcError = (HTMLel) => {
    if (!HTMLel.value) {
      HTMLel.className = 'error'
    }
  }
  funcError(firstName)
  funcError(lastName)
  funcError(selectCountries)
  funcError(selectDays)
  funcError(selectMonth)
  funcError(selectYears)
  funcError(password)
  funcError(confirmPassword)

  if (firstName.value && lastName.value && selectCountries.value && email.value && selectDays.value && selectMonth.value && selectYears.value && (checked1 || checked2) && password.value && (password.value === confirmPassword.value && emailCheked)) {
    [...finishReg.children].forEach(el => el.remove())
    img.remove()

    const block = document.createElement('div');
    const thank = document.createElement('h1');
    const registered = document.createElement('p');

    block.className = 'finishReg__block'
    thank.textContent = 'Thank You';
    thank.className = 'registered__h1';
    registered.textContent = 'you registered'
    registered.className = 'registered__p';
    
    block.append(thank, registered)
    finishReg.append(block)
  }
})

