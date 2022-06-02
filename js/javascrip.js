export function AddPost(inputData, inputTitel) {
    localStorage.setItem(
      "inlaggen",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("inlaggen") || "[]"),
        { inlagg: inputData, titel: inputTitel },
      ])
    );
  }
  
  export function GetfromLocalstorage() {
    let inlaggen = Array.from(JSON.parse(localStorage.getItem("inlaggen")));
    return inlaggen;
  }
  
  