const students = [
    {
        id: 1,
        name: "An",
        score: 8.5
    },
    {
        id: 2,
        name: "Binh",
        score: 7.0
    },
    {
        id: 3,
        name: "Cuong",
        score: 9.2
    },
    {
        id: 4,
        name: "Dung",
        score: 6.5
    },
    {
        id: 5,
        name: "Hoa",
        score: 8.0
    },
    {
        id: 6,
        name: "Lan",
        score: 5.5
    },
    {
        id: 7,
        name: "Minh",
        score: 9.0
    },
    {
        id: 8,
        name: "Nam",
        score: 7.8
    },
    {
        id: 9,
        name: "Phuong",
        score: 8.7
    },
    {
        id: 10,
        name: "Trang",
        score: 6.8
    }
];

console.log(students);

const tableBody =
    document.getElementById("studentTableBody");

function renderStudents(data) {

    tableBody.innerHTML = "";

    data.forEach(student => {

        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.score}</td>
            </tr>
        `;
    });
}

renderStudents(students);
const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener(
    "input",
    () => {

        const keyword =
            searchInput.value.toLowerCase();

        const filteredStudents =
            students.filter(student =>
                student.name
                    .toLowerCase()
                    .includes(keyword)
            );

        renderStudents(filteredStudents);
    }
);

const sortBtn =
    document.getElementById("sortBtn");

sortBtn.addEventListener(
    "click",
    () => {

        const sortedStudents =
            [...students].sort(
                (a, b) => b.score - a.score
            );

        renderStudents(sortedStudents);
    }
);

const statistics =
    document.getElementById("statistics");

function renderStatistics() {

    const averageScore =
        students.reduce(
            (sum, student) =>
                sum + student.score,
            0
        ) / students.length;

    statistics.innerHTML = `
        <h3>Total Students: ${students.length}</h3>
        <h3>Average Score: ${averageScore.toFixed(2)}</h3>
    `;
}

renderStatistics();