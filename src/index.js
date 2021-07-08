document.addEventListener('DOMContentLoaded', () => {

    fetchDogs()
    // eachDog()
    // clickDog()
})

function fetchDogs() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => data.forEach(eachDog))
}

function eachDog(dog) {
    // console.log(dog.name)
    let dogContainer = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogSex = document.createElement('td')
    let dogEdit = document.createElement('button')

    dogName.className = "dogName"
    dogBreed.className = "dogBreed"
    dogSex.className = "dogSex"
    dogEdit.className = "dogButton"

    dogName.textContent = dog.name
    dogBreed.textContent = dog.breed
    dogSex.textContent = dog.sex
    dogEdit.textContent = "Click Here"
    // console.log(dogName)



    dogContainer.appendChild(dogName)
    dogContainer.appendChild(dogBreed)
    dogContainer.appendChild(dogSex)
    dogContainer.appendChild(dogEdit)

    document.querySelector('table').appendChild(dogContainer)


    dogEdit.addEventListener('click', (e) => {
        let dogNameValue = e.path[1].cells[0].textContent
        let dogBreedValue = e.path[1].cells[1].textContent
        let dogSexValue = e.path[1].cells[2].textContent

        let grabForm = document.querySelector('#dog-form')
        grabForm.sex.value = dogSexValue
        grabForm.breed.value = dogBreedValue
        grabForm.name.value = dogNameValue

    })

}
