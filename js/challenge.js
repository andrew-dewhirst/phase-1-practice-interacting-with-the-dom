document.addEventListener('DOMContentLoaded', event => {
  timer();
  document.querySelector('#plus').addEventListener('click',incrementalAdd);
  document.querySelector('#minus').addEventListener('click',incrementalSub);
  document.querySelector('#heart').addEventListener('click',likeNumbers);
  document.querySelector('#pause').addEventListener('click',pauseTimer);
  document.querySelector('#submit').addEventListener('submit',leaveComments);
})

//Add user comments to the DOM
function leaveComments(event) {
  event.preventDefault();
  let commentText = document.querySelector('#comment-input').value;
  let commentList = document.createElement('p');
  commentList.textContent = `${commentText}`;
  document.querySelector('#list').appendChild(commentList);
}

//Add an ongoing timer to the DOM
function timer() {
  let sec = 1;
  let count = setInterval(function() {
    document.querySelector('#counter').textContent = ''+sec;
    sec++; 
  },1000)
}

//Add 1 second to the timer when plus button is clicked
function incrementalAdd() {
  document.querySelector('#counter').textContent++;
}

//Subtract 1 second from the timer when minus button is clicked
function incrementalSub() {
  document.querySelector('#counter').textContent--;
}

//Track the number of 'likes' each number in the counter receives
function likeNumbers() {
  let heartButton = document.querySelector('#heart');
  let countHeartButtonClicks = 0;
  heartButton.addEventListener('click', () => countHeartButtonClicks +=1);

  let counter = document.querySelector('#counter').textContent;
  let list = document.createElement('li');
  list.textContent = `${counter} has been liked ${countHeartButtonClicks} times`
  document.querySelector('.likes').appendChild(list);
}

//Add the ability to pause and resume the timer
function pauseTimer(event) {
  let e = event.target;
  if (e.innerText == 'pause') {
    e.textContent = 'resume';
    document.querySelector('#plus').disabled = true;
    document.querySelector('#minus').disabled = true;
    document.querySelector('#heart').disabled = true;
  } else if (e.innerText == 'resume') {
    e.textContent = 'pause';
    document.querySelector('#plus').disabled = false;
    document.querySelector('#minus').disabled = false;
    document.querySelector('#heart').disabled = false;
  }
}


