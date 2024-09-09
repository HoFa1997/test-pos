import "./App.css";

const handlePayment = () => {
  if (window.Android && window.Android.showToast) {
    window.Android.showToast("Payment request initiated");
  } else {
    console.log("Android payment interface not available");
  }
};

function App() {
  return <button onClick={handlePayment}>Call Android Payment</button>;
}

export default App;
