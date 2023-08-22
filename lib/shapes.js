class Shape {
  constructor() {
    this.color = "";
    this.text = "";
    this.textColor = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text,textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return "";
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />
      <text x="150" y="130" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="110" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />
      <text x="150" y="130" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};