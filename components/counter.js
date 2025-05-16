// Counter Component
class Counter {
  constructor() {
    this.count = 0;
    this.valueElement = document.querySelector(".counter-value");
    this.init();
  }

  init() {
    // Add event listeners
    document
      .getElementById("increment")
      .addEventListener("click", () => this.increment());
    document
      .getElementById("decrement")
      .addEventListener("click", () => this.decrement());
  }

  increment() {
    this.count++;
    this.updateDisplay();
  }

  decrement() {
    this.count--;
    this.updateDisplay();
  }

  updateDisplay() {
    this.valueElement.textContent = this.count;
  }
}

// Initialize the counter
new Counter();
