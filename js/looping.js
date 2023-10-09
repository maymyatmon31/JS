const mgmgInfo = {
    name : 'Mg Mg',
    age : 15,
    marks : [
        {
            id : 1,
            subject : 'Myanmar',
            mark : 50
        },
        {
            id : 2,
            subject : 'English',
            mark : 96
        },
        {
            id : 3,
            subject : 'Math',
            mark : 85
        },
        {
            id : 4,
            subject : 'Bio',
            mark : 12
        }
    ]
}
mgmgInfo.totalMark = 0;
mgmgInfo.results = {};

for (let i = 0; i <mgmgInfo.marks.length; i++) {
    console.log(mgmgInfo.marks[i].mark);
    mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
    mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "Success" : "fail"
}
console.log(mgmgInfo);