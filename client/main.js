console.log("Its Muffin Time!!!")

let baseURL = 'http://localhost:3000'

const complimentBtn = document.getElementById("complimentButton")

const getFortuneBtn = document.querySelector('#getFortune')
const fortuneDiv = document.querySelector('#fortuneDisplay')

const addFortuneBtn = document.querySelector('#addButton')
const fortuneInput = document.querySelector('#newFortune')

const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#fortuneID')


const getCompliment = () => {
    axios.get("http://localhost:3000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};





const getFortune = () => {
    
    fortuneDiv.innerHTML = ''

    axios.get(`${baseURL}/api/fortune`)
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

    fortuneDiv.innerHTML=''

    let bodyObj = {
        name: fortuneInput.value
    }

    axios.post(`${baseURL}/api/fortune`, bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            fortuneDiv.appendChild(newSpan)
        }
    })
}

const deleteFortune = () => {
    fortuneDiv.innerHTML=''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/api/fortune${idToDelete}`)
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


complimentBtn.addEventListener('click', getCompliment)
getFortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)

getFortune()