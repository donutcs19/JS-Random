const Color = document.getElementById('color')
const ColorCode = document.getElementById('code')
const generateBtn = document.getElementById('generate-button')
const avtElement = document.getElementById('img-avt')

const generateColor = () => {
    const patterns = '123456789abcdefg'
    let newColor = '#'
    let Avt = ''

    for (let index = 0; index < 6; index++){
        const random = Math.floor((Math.random()* 16))
        newColor += patterns[random]
        Avt += patterns[random]
    }
Color.style.backgroundColor = newColor
ColorCode.innerHTML = "Code : " + newColor
avtElement.src = `https://api.dicebear.com/8.x/bottts/svg?seed=${Avt}`
// avtElement.src = `https://api.dicebear.com/8.x/bottts/svg?baseColor=${Avt}`

// console.log(Avt)
}

generateBtn.addEventListener('click', generateColor)


    
    

