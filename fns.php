<?php
    $to = 'fermify@gmail.com';
    $subject = '$$$ Новый ЗАКАЗ! $$$';
    $itogCost = $_POST['quantity']*200;
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Кол-во литров: '.$_POST['quantity'].'</p>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Контактный телефон: '.$_POST['tel'].'</p>
                    <p>Адрес доставки: '.$_POST['address'].'</p>
                    <p>Комментарий: '.$_POST['notes'].'</p><br/>
                    <p>Стоимость: '.$itogCost.' руб.</p>
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <goat@milk.com>\r\n";
    mail($to, $subject, $message, $headers);
?>