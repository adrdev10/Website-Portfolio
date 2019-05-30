document.addEventListener('DOMContentLoaded', () => {
    let techList = Array(document.querySelector('.tech-list').getElementsByTagName('li'));
    randomPosition(techList[0]);
})


const randomPosition = (arr) => {
    const randNum = Math.random() * 20;
    const rect = document.getElementById('about-me-text');
    let width = rect.style.width;
    let height = rect.style.height;

    let area = width * height;
    let contentArr = [];
    for(let i = 0; i < arr.length; i++) {
        contentArr[i] = arr[i].innerText.toUpperCase();
    }
    console.log(contentArr)

    contentArr.forEach((el) => {
        changeRandomColor()
    })

}


const changeRandomColor = () => {
    const colorArray = [
    ];
}