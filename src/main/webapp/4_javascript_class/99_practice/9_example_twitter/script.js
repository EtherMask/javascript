// [선언.] 상수 및 변수 선언
// 템플릿 상수와 템플릿을 위치시킬 타겟 상수 선언
const templ = document.querySelector('template');
const target = document.querySelector('#r-section2');

// 랜덤 트윗 출력할 때 사용할 상수
const randomTweetBtn = document.querySelector('#r-btn');

// 새로운 트윗을 작성하고 출력할 때 사용할 상수
const userName = document.querySelector('.userName');
const msg = document.querySelector('.userMessage');
const wBtn = document.querySelector('#pushNewTweet');

// 필터링 이벤트1 에 사용할 변수
let names = document.querySelectorAll('.name');

// 필터링 이벤트2 에 사용할 변수
let maskedLists = document.querySelectorAll('.hide');
let filteredLists = document.querySelectorAll('.filtered');



// [기능1.] 화면 로딩될 때 오리지날 트윗을 화면에 출력





//------------------------------------------------------------------
// [기능2.] 'check new tweet' 버튼을 클릭하면 랜덤 트윗 출력하기



//------------------------------------------------------------
// [기능3.] 'twitt!' 버튼 클릭으로 새로운 트윗 출력하기





//--------------------------------------------------------------
//  (함수) 이름을 클릭하면 이름만 필터링하는 filterTweets 이벤트 연결
function handleClick(){
    names = document.querySelectorAll('.name');
    lists = document.querySelectorAll('li');
    for (let name of names){
        name.onclick = filterTweets;
    }
}

//  필터링된 트윗을 화면에 출력 
function filterTweets(){

    // 기존 트윗을 화면에서 감추고 
    // 감춰진 트윗을 셀렉한다.
    hideTweets();
    maskedLists = document.querySelectorAll('.hide');

    let beforeFilteringArr = Array.from(lists);
    							// 배열의  filter 함수 사용
    let filteredArr = beforeFilteringArr.filter(li => li.querySelector('.name').innerText === event.target.innerText);
    
    for(let i = 0; i < filteredArr.length; i++){
        let filteredEl = createFilteredEl(filteredArr[i]);
        target.appendChild(filteredEl);
    }
    let filtered = document.querySelectorAll('li:not([class])');
    for (let list of filtered){
        list.classList.add('filtered');
    }
    filteredLists = document.querySelectorAll('.filtered');

    randomTweetBtn.innerText = 'go back & clear filter';
    changeBtnToGoBack();
}

//  (함수) 화면에서 트윗 내용을 감춘다. 
function hideTweets(){
    for(let list of lists){
        list.classList.add('hide');
    }
}

// (함수) 필터링된 데이터를 동적으로 만든다. 
function createFilteredEl(tweet){
    let clonedTempl = document.importNode(templ.content, true);
    let user = clonedTempl.querySelector('.name');
    let time = clonedTempl.querySelector('.time');
    let msg = clonedTempl.querySelector('.message');

    user.textContent = tweet.querySelector('.name').innerText;
    time.textContent = tweet.querySelector('.time').innerText;
    msg.textContent = tweet.querySelector('.message').innerText;
    return clonedTempl;
}

// (함수) go back 버튼에 클래스를 삭제 및 추가한다.
function changeBtnToGoBack(){
    randomTweetBtn.classList.remove('pushRandomTweet');
    randomTweetBtn.classList.add('js-gobackBtn');
}

// (함수) 필터링 전으로 돌아간다
function unfilterTweets(){
    let maskedListsArr = Array.from(maskedLists);
    for(let maskedListArr of maskedListsArr){
        maskedListArr.classList.remove('hide');
    }

    let filteredListsArr = Array.from(filteredLists);
    for(let filteredListArr of filteredListsArr){
        filteredListArr.remove();
    }

    randomTweetBtn.innerText = 'check new tweets';
    changeBtnToCheckNewTweet();
}

// (함수) check new tweet 버튼에 클래스를 다시 바꾸어준다 
function changeBtnToCheckNewTweet(){
    randomTweetBtn.classList.remove('js-gobackBtn');
    randomTweetBtn.classList.add('pushRandomTweet');
}


