// import * as Users from '@/Table.json';


// const fetchData=fetch("@/Table.json").then(res=>{
//   return res;
// })

// export function table(){
//   console.log(`abc`)
//     return fetchData.json();
// }

const data =require('@/Table.json');

export function table(){
    return data
}