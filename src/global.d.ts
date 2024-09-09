interface AndroidInterface {
  payment(data: string): void;
  showToast(message: string): void; // Add showToast method here
}

interface Window {
  Android: AndroidInterface;
}
