import { writable, type Writable } from "svelte/store";
export const username:Writable<string> = writable('',(set,update)=>{
    set('Username');
    //console.log("Got a subcriber");
    return () => console.log('No more subscribers');
});
export const icon:Writable<string> = writable('', (set) => {
    set('#3b62cc');
    return () => console.log('No more subcribers');
});