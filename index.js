const selectDays = document.querySelector('.select-days');
const selectMonth = document.querySelector('.select-month')
const selectYears = document.querySelector('.select-years')


const year = [
  {
    month:'january',
    monthNumber:0,
    days:31
  },
  {
    month:'february',
    monthNumber:1,
    days:28
  },
  {
    month:'march',
    monthNumber:2,
    days:31
  },
  {
    month:'april',
    monthNumber:3,
    days:30
  },
  {
    month:'may',
    monthNumber:4,
    days:31
  },
  {
    month:'June',
    monthNumber:5,
    days:30
  },
  {
    month:'july',
    monthNumber:6,
    days:31
  },
  {
    month:'august',
    monthNumber:7,
    days:31
  },
  {
    month:'september',
    monthNumber:8,
    days:30
  },
  {
    month:'october',
    monthNumber:9,
    days:31
  },
  {
    month:'november',
    monthNumber:10,
    days:30
  },
  {
    month:'december',
    monthNumber:11,
    days:30
  },
  
]
selectDays.addEventListener('click', () => {
  let days = year[0].days;
  for(let i = 0; i < days; i++) {
    selectDays.remove(0)
  }

  for (let i = 1; i <= year[0].days; i++) {
    const option = document.createElement('option')
      option.textContent = i
      selectDays.add(option)
  }
})

selectMonth.addEventListener('click', () => {
  for(let i = 0; i < 12; i++) {
    selectMonth.remove(0)
  }

  for (let i = 0; i < 12; i++) {
    const option = document.createElement('option')
      option.textContent = year[i].month
      selectMonth.add(option)
  }
})

selectYears.addEventListener('click', () => {
  for(let i = 0; i < 123; i++) {
    selectYears.remove(0)
  }

  for (let i = 0; i <= 123; i++) {
    const option = document.createElement('option')
      option.textContent = i + 1900
      selectYears.add(option)
  }
})