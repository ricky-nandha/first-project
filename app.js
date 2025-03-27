let username = prompt("What is your name?");

alert("Hello, " + username);

let age = Number(prompt("What is your age(in years)?"));
if (age > 15) {
  alert("Well done you now can access this site!");
} else {
  alert(
    "Access denied " +
      username +
      ", you are unfortunately too young to visit this site!"
  );
}
