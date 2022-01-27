export const fetchResult = async(word)=>{

    let result = await fetch(`http://localhost:3000/define/${word}`);
    let JsonResult = await result.json(); 

    return JsonResult = JSON.stringify(JsonResult).replace(/[\[\]']+/g, ''); 
}