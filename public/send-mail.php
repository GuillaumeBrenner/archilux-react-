<?php
/**
 * ArchiLux — Contact form handler (PHP mail).
 *
 * L'adresse "From" doit être sur ton domaine (group-archilux.com), sinon les
 * mails partent en spam ou sont refusés.
 */

$TO_ADDRESS   = 'grouparchilux@gmail.com';
$FROM_ADDRESS = 'no-reply@group-archilux.com';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// axios envoie du JSON (application/json)
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
  $data = $_POST; // repli si envoyé en form-urlencoded
}

// Nettoyage anti-injection d'en-têtes (retire retours à la ligne)
function clean($v) {
  return trim(str_replace(["\r", "\n"], ' ', (string) $v));
}

$name    = clean($data['name'] ?? '');
$email   = clean($data['email'] ?? '');
$phone   = clean($data['phone'] ?? '');
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
  http_response_code(422);
  echo json_encode(['error' => 'Invalid input']);
  exit;
}

$subject = '=?UTF-8?B?' . base64_encode('Nouveau message de contact — ArchiLux') . '?=';

$body  = "Nom : $name\n";
$body .= "Email : $email\n";
$body .= "Téléphone : $phone\n\n";
$body .= "Message :\n$message\n";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: ArchiLux <$FROM_ADDRESS>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";

if (mail($TO_ADDRESS, $subject, $body, $headers)) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Mail sending failed']);
}
