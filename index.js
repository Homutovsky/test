const select = document.querySelector('.select-css')

const year = [
  {
    month:'january',
    days:31
  },
  {
    month:'february',
    days:28
  },
  {
    month:'march',
    days:31
  },
  {
    month:'april',
    days:30
  },
  {
    month:'may',
    days:31
  },
  {
    month:'June',
    days:30
  },
  {
    month:'july',
    days:31
  },
  {
    month:'august',
    days:31
  },
  {
    month:'september',
    days:30
  },
  {
    month:'october',
    days:31
  },
  {
    month:'november',
    days:30
  },
  {
    month:'december',
    days:30
  },
  
]
select.addEventListener('click', () => {
  let days = year[0].days;
  for(let i =0; i < days; i++) {
    select.remove(0)
  }

    // for (let node of childNodes) {
    // }
  // for(let i=1; i<30; i++) {
  //   const option = document.createElement('option')
  //   option.textContent = i
  //   select.append(option)
  // }

  for (let i=1; i<=year[0].days; i++) {

    const option = document.createElement('option')
      option.textContent = i
      select.append(option)
  }
})

select.addEventListener('click', () => {
  let childNodes = select.children
  console.log(childNodes)
})

