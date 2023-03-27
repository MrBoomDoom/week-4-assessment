const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addComplimentButton = document.querySelector('#addButton')
const complimentInput = document.querySelector('#newCompliment')

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

const addCompliment = () => {

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
addCompliment.addEventListener('click', addCompliment)