var score = 33;
score = "8";
var ashray = { name: 'Ashray', id: 34 };
// function getDbId(id: number | string){
//   console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("8");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", false];
