#!/usr/bin/env tsx

function validate(balance: number, amount: number) {
  if (amount <= 0.0) {
    return false;
  }
  return amount <= balance;
}

function deposit(balance: number, percentage: number, years: number) {
  if (balance <= 0.0 || percentage <= 0.0 || years <= 0) {
    return balance;
  }
  let interest: number = 0;
  for (let i = 0; i < years; i++) {
    interest = (balance * percentage) / 100;
    balance += interest;
  }
  return Math.round(balance * 100) / 100;
}

function transaction(senderCard: string, receiverBalance: number, amount: number) {
  console.log("Received: " + amount);
  console.log("From: " + senderCard);
  console.log(`Balance now: ${receiverBalance + amount}`);
}

function getCardNumber() {
  let num = Math.floor(Math.random() * (999_999_999 - 100_000_000 + 1));
  let numStr = String(num);
  return numStr.length + 1;
}

function validateChangeDailyLimit(newLimit: number, currentLimit: number) {
  if (newLimit <= 0) {
    console.log("Limit must not be greater than 0");
    return false;
  }
  if (currentLimit == newLimit) {
    console.log("Limit must not be same as current");
    return false;
  }
  console.log("Limit has changed");
  return true;
}

function main() {
  let balance: number = 1000.0;
  let amount: number = 250.0;
  let years: number = 3;
  let newLimit: number = 40;
  let currentLimit: number = 20;

  console.log(
    "Transaction valid? " + (validate(balance, amount) ? " Yes" : " No")
  );

  console.log("New card number: " + getCardNumber());

  validateChangeDailyLimit(newLimit, currentLimit);

  let ok = validate(balance, amount);
  console.log("Transaction valid? " + (ok ? "Yes" : "No"));

  let newBalance = deposit(balance, 2.5, years);
  console.log("Balance after " + years + " years = " + newBalance);

  let str = "4242 4242 4242 4242";
  transaction(str, balance, 10.5);

  return 0;
}

main();
