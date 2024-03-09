/*
Every team is going to work on implementing a banking management class The teams, by the end of this phase, need to have developed programs that follow the guidelines below:
For the withdraw method, do the following (USING ASYNC/AWAIT)
Create a method "balanceCompare" that takes in the amount and checks if there is enough balance, return True if it is. (simulate using timeout 1000ms)
Create a method "withdraw" that takes the amount to be withdrawn in case the previous method returned True, update account balance and return message containing new balance
You need to add error handlers for all your methods.
After creating the methods, you need to test your implementation. Instantiate an object and test both withdraw and deposit functions. Use log statements where necessary.
*/

const getUserBalance = async (accountID, demoBalance = 1000) => {
  try {
    const userBalance = await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, demoBalance);
    });
  } catch (error) {
    console.log("there was an error getting user information");
    console.log(error)
  }
}

const withdraw = async (accountID, amount){

}

const balanceCompare = async (accountID, amount) => {
  try {
    currentBalance = await getUserBalance(accountID);
    if (currentBalance - amount <= 0) {
      console.log("No Enough Balance in your Account");
    } else {
      withdraw(accountID, amount);
    }
  } catch (error) {
    console.log("there was an error conferming the withdrawal");
    console.log(error)
  }
}