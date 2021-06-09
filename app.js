window?.addEventListener("load", () => {
  const ul = document.querySelector("ul");
  for (let i = 1; i <= 100; i++) {
    const number = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) {
      number.innerText = "FizzBuzz";
    } else if (i % 5 === 0) {
      number.innerText = "Fizz";
    } else if (i % 3 === 0) {
      number.innerText = "Buzz";
    } else {
      number.innerText = i;
    }
    ul.append(number);
  }
});
