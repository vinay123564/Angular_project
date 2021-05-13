var count = document.querySelector(".num");
    var count1 = document.querySelector(".num1");
    var count2 = document.querySelector(".num2");
    var count3 = document.querySelector(".num3");
    let counter = 1;
    setInterval(() => {
      if(counter<232){
      counter++;
      count.innerText = counter;
      }
      if(counter<521){
        counter++;
      count1.innerText = counter;
      }
      if(counter<1463){
        counter++;
      count2.innerText = counter;
      }
      if(counter<15){
        counter++;
      count3.innerText = counter;
      }
    },5);
    