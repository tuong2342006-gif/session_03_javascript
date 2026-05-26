console.log("DOM Basics");

//getElementById
const title =
    document.getElementById("title");
console.log(title);

//querySelector
const desc =
    document.querySelector(".description");
console.log(desc);

//querySelector với ID
const btn =
    document.querySelector("#changeBtn");

//querySelectorAll
const items =
    document.querySelectorAll("li");

//đọc nội dung
console.log(title.textContent);
//thay đổi nội dung
title.textContent =
    "JavaScript DOM Master";

//innerHTML
const desc =
    document.querySelector(".description");

desc.innerHTML =
`
<b>Learning DOM</b>
`;

//textContent
desc.textContent =
"<b>Hello</b>";

//innerHTML
desc.innerHTML =
"<b>Hello</b>";

//classList
//HTML
{/* <h1 id="title">
    Hello DOM
</h1> */}
//CSS
// .active{
//     color:red;
// }

//add
title.classList.add("active");
//remove
title.classList.remove("active");
//contains
console.log(
    title.classList.contains("active")
);
//toggle
title.classList.toggle("active");


//Style trực tiếp
//HTML
{/* <h1 id="title">
    Hello DOM
</h1> */}
//JS
title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "40px";

//Tạo phần tử mới
const li =
    document.createElement("li");
//nội dung
li.textContent =
    "Nguyen Van A";

// gắn vào DOM
const list =
    document.getElementById("studentList");
list.appendChild(li);

//tạo nhiều phần tử
const students =
[
    "An",
    "Binh",
    "Cuong"
];
students.forEach(student => {
    const li =
        document.createElement("li");
    li.textContent = student;
    list.appendChild(li);

});

//Xóa phần tử
//HTML
//<li id="student1">
   // An
//</li>
//JS
const item =
    document.getElementById("student1");

item.remove();
