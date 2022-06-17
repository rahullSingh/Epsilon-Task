

document.querySelector("input").addEventListener("keyup",function(){
  function deBounce(d){
    let action;
    clearTimeout(action);
    action=setTimeout(()=>{
      console.log("debounce called");
    },d);
  }

  deBounce(500);
})
