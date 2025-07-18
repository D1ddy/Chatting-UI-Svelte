import { writable, type Writable } from "svelte/store";
export const username:Writable<string> = writable('',(set,update)=>{
    set('Username');
    //console.log("Got a subcriber");
    return () => console.log('No more subscribers');
});