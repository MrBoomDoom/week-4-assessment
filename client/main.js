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
    

    axios.get("http://localhost:3000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

const addCompliments = () => {

    complimentsDiv.innerHTML=''

    let bodyObj = {
        name: complimentsInput.value
    }

    axios.post(`${baseURL}/dinos`, bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            complimentsDiv.appendChild(newSpan)
        }
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addCompliment.addEventListener('click', addCompliments)