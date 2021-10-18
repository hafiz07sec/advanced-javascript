const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 31, name: 'Manna'},
    {id: 51, name: 'Sakib Khan'},
    {id: 11, name: 'Dipzol'}

]; 

const names = students.map( s => s.name);
const ids = students.map( s => s.id);

const bigger = students.filter(s => s.id>21)

console.log(bigger); 