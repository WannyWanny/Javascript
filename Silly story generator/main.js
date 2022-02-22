//사용자가 필드에 입력하는 값
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Math.random은 0~1사이의 부동소수점을 생성. floor로 정수로 변환. array.length를 곱함으로써 [0, 1, 2]의 숫자중 하나를 랜덤으로 생성
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

//결과적으로 반환해야할 값.
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk.' +
    ' When they got to :inserty:, they stared in horror for a few moments, then :insertz:. ' +
    'Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//.randomize를 수행하면 result를 수행하고 stroy.textContent를 반환
randomize.addEventListener('click', result);

function result() {
    //Request1: 함수가 run될 때마다 새 story가 랜덤하게 만들어 질수 있게 해야 하므로 let 사용.
    let newStory = storyText;

    //Request2
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    //Request3
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

    if(customName.value !== '') {
        const name = customName.value;
        //Request4
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        //Request5
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}