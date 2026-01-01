<?php

$dirPath = readline("Directory path: ");

$js = 0;
$ts = 0;
$php = 0;
$files = scandir($dirPath);
foreach ($files as $file) {
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    echo $extension;
    if ($extension == "js") {
        $js++;
    }
    if ($extension == "ts") {
        $ts++;
    }
    if ($extension == "php") {
        $php++;
    }
}
echo "
    *.js: $js
    *.ts: $ts
    *.php: $php
  ";
