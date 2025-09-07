<?php

// Let's see very basics for programming.

// String, Numbers and boolean are the most important and basic data types in any language.
$a = 10;
$b = 20;

$firstName = 'Bharath';
$lastName = 'Kondeti';

echo $firstName . ' ' . $lastName;
echo PHP_EOL;

echo $a + $b;
echo PHP_EOL;

// If PHP, we must use . for string addition and + for math addition.
// This is main difference.

$testString = TRUE;
echo $testString;
echo PHP_EOL;

$arry = [1, 2, 3];
//echo $arry; // This will give a PHP warning as echo can only be used to print strings
print_r($arry); // PHP, we must use print_r for arrays
// This will also print index.
