document.getElementById("subject").addEventListener("input", function(){
  const max = 15;
  if (this.value>max){
    this.value=max;
  }
});

function generateFields() {

  const subject = parseInt(document.getElementById("subject").value);
  const container = document.getElementById("marks");
  const ask = document.getElementById("askmarks");

  document.getElementById("name").disabled=true;
  document.getElementById("subject").disabled=true;
    
  ask.style.display="block"
  container.innerHTML = "";  

  document.querySelector(".compute").style.display="block";

  for (let i = 0; i < subject; i++) {
    const row = document.createElement("div");
    row.classList.add("subjectrow");

    const label = document.createElement("label");
    label.textContent=`Subject ${i+1}:`;
    label.setAttribute("for", `subject_${i}`);
    label.classList.add("subjectlabel");

    const input = document.createElement("input");
    input.type = "number";
    input.id = `subject_${i}`;
    input.required=true;
    input.min="0";
    input.placeholder = `Enter marks for Subject ${i + 1}`;
    input.classList.add("subjectmark");
    
    input.addEventListener("input", function(){
      if (this.value>100){
        this.value=100;
      }
    })

    row.appendChild(label);
    row.appendChild(input);
    container.appendChild(row);
  }
};

function computeMarks(){
  const subject = parseInt(document.getElementById("subject").value);
  let total = 0;

  for (let j=0; j<subject; j++){
    const mark=parseInt(document.getElementById(`subject_${j}`).value);
    total +=mark;
  }

  const average = total / subject;

  let grade ="";

  if (average>=85) {
    grade="A";    
  } else if (average<85 && average>=75){
    grade="B";
  } else if (average<75 && average>=55){
    grade="C";
  } else if (average<55 && average>=40){
    grade="D";
  } else if (average<40){
    grade="F"
  }

  document.getElementById("result").innerHTML = 
  `<p><strong>Total Marks: </strong>${total}</p>
  <p><strong>Average Marks: </strong>${average.toFixed(2)}</p>
  <p><strong>Grade: </strong>${grade}</p>`;

  document.getElementById("result").style.display="block"

}

function cancel(){
  location.reload();
}
