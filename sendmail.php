<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

  $mail = new PHPMailer(true);

  $mail->SMTPDebug = 0;
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.gmail.com';       //Set the SMTP server to send
  $mail->SMTPAuth   = true;                              //Enable SMTP authentication
  $mail->Username   = 'Konstantin.and.Anna.work@gmail.com';
  $mail->Password   = 'axjxzpofyhovxuon';
  $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
  $mail->Port       = 465;
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/') ;





  $mail->isHTML(true);
  // $mail->Username   = 'Konstantin.and.Anna.work@gmail.com';
  // $mail->Password   = 'axjxzpofyhovxuon';

  // От кого письмо
  $mail->setFrom('Konstantin.and.Anna.work@gmail.com', 'Константин Павлов');
  // Кому отправить
  $mail->addAddress('partners@kia-digital.ru');
  // Тема письма
  $mail->Subject = 'Привет! Это тестовое сообщение';

  // Рука
  // anabelova17@yandex.ru
  
  // $hand = "Правая";
  // if($_POST['hand'] == "left"){
  //   $hand = "Левая";
  // }

  // Тело письма
  $body = '<h1>Приветствую, письмо было доставлено!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['insta']))){
    $body.= '<p><strong>Instagram:</strong> '.$_POST['insta'].'</p>';
  }

  if(trim(!empty($_POST['email']))){
    $body.= '<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  }

  // if(trim(!empty($_POST['hand']))){
  //   $body.= '<p><strong>Рука:</strong> '.$hand.'</p>';
  // }

  // if(trim(!empty($_POST['age']))){
  //   $body.= '<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
  // }

  // if(trim(!empty($_POST['message']))){
  //   $body.= '<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
  // }



// Прикрепить файл
  // if (!empty($_FILES['image']['tmp_name'])){
  //   // Путь загрузки файла
  //   $filePatch = __DIR__ . "/files/" . $_FILES['image']['name'];
  //   //грузим файл
  //   if (copy($_FILES['image']['tmp_name'], $filePatch)){
  //     $fileAttach = $filePatch;
  //     $body.='<p><strong>Фото в приложении</strong></p>';
  //     $mail->addAttachment($fileAttach);
  //   }
  // }
  $mail->Body = $body;

  //Отправляем
  if (!$mail->send()) {
    $message = 'Ошибка';
  }  else {
    $message = 'Данные отправлены';
  }


  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
