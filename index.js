// Code your solutions in this file
function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); // Step 3: Add message to array
  }

  return messages;
}
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
