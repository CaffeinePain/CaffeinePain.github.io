
//범용 변수선언
const BOOKMARK_KEY = "bookmarks";
const bookmarkPlace = document.getElementById("bookmark-place");
const savedBookmarks = localStorage.getItem(BOOKMARK_KEY);

let bookmarks = [];
// 팝업창(북마크 생성창) 변수선언
const addBtn = document.getElementById("bookmark-addBtn");
const modal = document.getElementById("modal");
const modalCancelBtn = document.getElementById("modal-cancel");
const modalInput = document.getElementById("modal-input");
const modalInputName = document.querySelector("#modal-input input[type=name]");
const modalInputLink = document.querySelector("#modal-input input[type=link]");
//팝업창2(북마크 삭제창) 변수선언
const delBtn = document.getElementById("bookmark-delBtn");
const modal2 = document.getElementById("modal_2");
const modal2List = document.getElementById("modal_2-list");
const modal2CancelBtn = document.getElementById("modal_2-cancel");

//범용 함수선언
function openBookmark(event) {
    const link = event.target.parentNode.link;
    window.location.href = `${link}`;
}

function mouseOnBookmark(event) {
    const h1 = event.target;
    h1.style.opacity = "1";
    h1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function mouseOffBookmark(event) {
    const h1 = event.target;
    h1.style.opacity = "0";
    h1.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function saveBookmarks() {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
}
//팝업창(북마크 생성창) 함수선언
function displayModal() {
    modalInputLink.value = "";
    modalInputName.value = "";
    modal.classList.remove(HIDDEN_CLASSNAME);
}

function modalSubmit(event) {
    event.preventDefault();
    modal.classList.add(HIDDEN_CLASSNAME);
    const newBookmark = {
        name: `${modalInputName.value}`,
        link: `${modalInputLink.value}`,
        id: `BM${Date.now()}`
    }
    createNewBookmark(newBookmark);
    bookmarks.push(newBookmark);
    saveBookmarks();
}

function createNewBookmark(newBookmark) {
    const span = document.createElement("span");
    span.addEventListener("mouseover", mouseOnBookmark);
    span.addEventListener("mouseout", mouseOffBookmark);
    span.name = newBookmark.name;
    span.link = newBookmark.link;
    span.id = newBookmark.id;
    span.style.backgroundImage = `url('https://www.google.com/s2/favicons?domain=${newBookmark.link}')`;
    const h1 = document.createElement("h1");
    h1.addEventListener("click", openBookmark);
    h1.innerText = span.name;
    span.append(h1);
    bookmarkPlace.prepend(span);
}

function closeModal() {
    modal.classList.add(HIDDEN_CLASSNAME);
}
// 팝업창2(북마크 삭제) 함수선언
function displayModal2() {
    const list = document.getElementById("modal_2-list");
    for(i = (list.childElementCount-1); i>=0; i--) {
        list.removeChild(list.children[i]);
    }
    bookmarks.forEach(drawDeleteList);
    modal2.classList.remove(HIDDEN_CLASSNAME);
}

function drawDeleteList(BookmarkObj) {
    const span = document.createElement("span");
    span.innerText = BookmarkObj.name;
    span.id = BookmarkObj.id;
    span.addEventListener("click", deleteBookmark);
    modal2List.append(span);
}

function deleteBookmark(event) {
    for(i = (bookmarkPlace.childElementCount)-1; i>=0; i--) {
        compensater = bookmarkPlace.children[i];
        if(compensater.id === event.target.id) {
            compensater.remove();
        }
    }
    for(i = (modal2List.childElementCount)-1; i>=0; i--) {
        compensater = modal2List.children[i];
        if(compensater.id === event.target.id) {
            compensater.remove();
        }
    }
    bookmarks = bookmarks.filter((bookmark) => bookmark.id !== event.target.id);
    saveBookmarks();
}

function closeModal2() {
    modal2.classList.add(HIDDEN_CLASSNAME);
}

//부팅시 명령
if(savedBookmarks !== null) {
    const parsedBookmarks = JSON.parse(savedBookmarks);
    bookmarks = parsedBookmarks;
    parsedBookmarks.forEach(createNewBookmark);
}
//팝업창(북마크 생성창) 명령
addBtn.addEventListener("click", displayModal);
modalCancelBtn.addEventListener("click", closeModal);
modalInput.addEventListener("submit", modalSubmit);
//팝업창2(북마크 삭제창) 명령
delBtn.addEventListener("click", displayModal2);
modal2CancelBtn.addEventListener("click", closeModal2);
//끝