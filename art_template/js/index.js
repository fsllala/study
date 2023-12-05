// 1.提供数据源
// console.log(template("temp_one", {
//   value:666,
//   data:{
//     name:"小红",
//     age:18
//   }
// }))

// 3.通过模板引擎渲染

const arr = [
  { name: "小红", age: 18 },
  { name: "小明", age: 19 },
  { name: "小王", age: 20 },
];

const box = document.getElementById("box");
box.innerHTML = template("temp_one", {
  value: 666,
  data: {
    name: "小红",
    ages: 18,
  },
  arr,
  sex:"male",
  conHtml: "<h1>hello</h1>",
});
