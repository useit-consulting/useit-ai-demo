// Color Picker Component
class ColorPicker {
  constructor() {
    this.selectedColor = "#3498db";
    this.preview = document.querySelector(".color-preview");
    this.colorInput = document.getElementById("color-input");
    this.hexInput = document.getElementById("color-hex");
    this.init();
  }

  init() {
    // Add event listeners
    this.colorInput.addEventListener("input", (e) => {
      this.selectedColor = e.target.value;
      this.updateColor();
    });

    this.hexInput.addEventListener("input", (e) => {
      const value = e.target.value;
      if (/^#[0-9A-F]{6}$/i.test(value)) {
        this.selectedColor = value;
        this.updateColor();
      }
    });
  }

  updateColor() {
    this.preview.style.backgroundColor = this.selectedColor;
    this.hexInput.value = this.selectedColor;
    this.colorInput.value = this.selectedColor;
  }
}

// Initialize the color picker
new ColorPicker();
