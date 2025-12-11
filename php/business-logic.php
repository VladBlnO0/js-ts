<?php

function validate($balance, $amount)
{
    if ($amount <= 0.0) {
        return false;
    }
    return $amount <= $balance;
}

function deposit($balance, $percentage, $years)
{
    if ($balance <= 0.0 || $percentage <= 0.0 || $years <= 0) {
        return $balance;
    }
    for ($i = 0; $i < $years; $i++) {
        $interest = ($balance * $percentage) / 100;
        $balance += $interest;
    }
    return round($balance * 100) / 100;
}

function transaction($senderCard, $receiverBalance, $amount)
{
    echo "Received: $amount \n";
    echo "From: $senderCard \n";
    echo "Balance now: " . ($receiverBalance + $amount) . "\n";
}

function getCardNumber()
{
    $num = rand() % 999999999 + 1;
    $numStr = (string)$num;
    $cardNumber = strlen($numStr) + 1;
    $cardNumber = $numStr;
    return $cardNumber;
}

function validateChangeDailyLimit($newLimit, $currentLimit)
{
    if ($newLimit <= 0) {
        echo "Limit must not be greater than 0\n";
        return false;
    }
    if ($currentLimit == $newLimit) {
        echo "Limit must not be same as current\n";
        return false;
    }
    echo "Limit has changed\n";
    return true;
}

function main()
{
    $balance = 1000.0;
    $amount = 250.0;
    $years = 3;
    $newLimit = 40;
    $currentLimit = 20;

    echo "Transaction valid? " . (validate($balance, $amount) ? " Yes" : " No") . "\n";

    echo "New card number: " . getCardNumber() . "\n";

    validateChangeDailyLimit($newLimit, $currentLimit);

    $ok = validate($balance, $amount);
    echo "Transaction valid? " . ($ok ? "Yes" : "No") . "\n";

    $newBalance = deposit($balance, 2.5, $years);
    echo "Balance after " . $years . " years = " . $newBalance . "\n";

    $str = "4242 4242 4242 4242";
    transaction($str, $balance, 10.5);

    return 0;
}

main();

?>