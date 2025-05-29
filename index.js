// You are building a system that sends email reminders to users 5 seconds after they register. Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.
// Input
// email(string)
// Process
// 1. Create a function sendReminder that takes an email as an argument.
// 2.   Wait for 5 seconds using setTimeout inside a Promise.
// 3. Log "Reminder sent to [email]" after the wait.
// Output
// Reminder sent to email

async function sendReminder(email) { 
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Reminder sent to ${email}`);
            resolve();
        }, 5000);
    });
}
async function sendReminderToUsers(){
    const users = ["sharonmuriithi@gmail.com","junesmith@gmail.com","susananyango@gmail.com"];
    for (const user of users) {
        await sendReminder(user);
    }
    console.log("All reminders sent.");
    
}

// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
// Input
// email(string)
// Process
// 1. Create a function tryLogin that simulates login attempts.
// 2. Use a counter to track attempts.
// 3. Use setTimeout to simulate a delay of 1 second between attempts.
// 4. Log "Login successful" on the third attempt, or "Login failed after 3 attempts" if it fails all three times.
// Output
// Login successful or Login failed after 3 attempts

async function tryLogin() {
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (attempts === maxAttempts) {
            console.log("Login successful");
            return;
        } else {
            console.log("Login failed, retrying...");
        }
    }
    console.log("Login failed after 3 attempts");
}

// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. When the countdown reaches 0, stop the interval and log "Time's up!".
// Input
// count(number)
// Process
// 1. Create a function countdown that initializes a count variable to 5.
// 2. Use setInterval to log the count every second and decrement it.
// 3. When the count reaches 0, clear the interval and log "Time's up!".
// Output
//  "Time's up!"(String)

function countdown() { 
    let count = 5;
    const intervalId = setInterval(() => {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
}

// You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.
// Input
// header(string), content(string), footer(string)
// Process
// 1. Create an async function loadPage.
// 2. Log "Loading header..." and wait for 1 second.
// 3. Log "Loading content..." and wait for 2 seconds.
// 4. Log "Loading footer..." and wait for 1 second.
// 5. Log "Page fully loaded".
// Output
// Page fully loaded (String)


async function loadPage() { 
    console.log("Loading header...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Loading content...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Loading footer...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Page fully loaded");
}   
    
// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.
//  Input
// symbol(string)
// Process
// 1. Create a function fetchPrice that takes a stock symbol as an argument.
// 2. Return a Promise that resolves after 2 seconds with a message.
// 3. Use async/await to call fetchPrice for two different symbols and log the results.
// Output
// Price for AAPL retrieved, Price for GOOG retrieved (String)
async function fetchPrice(symbol) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}
async function getStockPrices() {
    const aaplPrice = await fetchPrice("AAPL");
    console.log(aaplPrice);
    const googPrice = await fetchPrice("GOOG");
    console.log(googPrice);
}