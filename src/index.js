
function showPoem(response){

new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}



function poemGenerator(event) {
  event.preventDefault();

  let poemElement=document.querySelector(".poem-topic");
  console.log(poemElement.value);
  
  let apiKey="20468a8333bf53tb20f4666cf98f1o0b";
  let prompt=`User instructions: Generate a french poem about ${poemElement.value}`;
  let context="You are a romatic poem expert and love to write beautiful short poems.Your mission is to generate a 4 line poem and each line </br> elment and at the end of the poem 'Shecodes AI' with </strong> element.Not need to show the poem title";
  let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiURL).then(showPoem);
  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
