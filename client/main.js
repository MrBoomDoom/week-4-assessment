console.log("yee yee")

let baseURL = 'http://localhost:3000'

const complimentBtn = document.getElementById("complimentButton")

const getFortuneBtn = document.querySelector('#getFortune')
const fortineDiv = document.querySelector('#fortuneDisplay')

const addFortuneButton = document.querySelector('#addButton')
const fortuneInput = document.querySelector('#newFortune')

const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#fortuneID')


const getCompliment = () => {

    axios.get("http://localhost:3000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}





const getFortune = () => {
    
    fortuneDiv.innerHTML = ''

    axios.get(`${baseURL}/fortune`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

const addFortune = () => {

    complimentDiv.innerHTML=''

    let bodyObj = {
        name: complimentDisplay.value
    }

    axios.post(`${baseURL}/compliments`, bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            complimentDiv.appendChild(newSpan)
        }
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
// deleteFortuneBtn.addEventListener('click', deleteFortune)

getFortune()