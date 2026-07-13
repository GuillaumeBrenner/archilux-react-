<?php
/**
 * ArchiLux — Newsletter subscription handler (PHP mail).
 *
 * Ce script se contente de notifier l'équipe de la nouvelle inscription.
 * Pour une vraie liste, enregistre plutôt l'email en base ou via un service
 * (Mailchimp, Brevo…).
 */

$TO_ADDRESS   = 'grouparchilux@gmail.com';
$FROM_ADDRESS = 'no-reply@group-archilux.com';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
  $data = $_POST;
}

$email = trim(str_replace(["\r", "\n"], ' ', (string) ($data['email'] ?? '')));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['error' => 'Invalid email']);
  exit;
}

$subject = '=?UTF-8?B?' . base64_encode('Nouvelle inscription newsletter — ArchiLux') . '?=';
$body    = "Nouvelle inscription à la newsletter :\n$email\n";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: ArchiLux <$FROM_ADDRESS>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($TO_ADDRESS, $subject, $body, $headers)) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Mail sending failed']);
}
