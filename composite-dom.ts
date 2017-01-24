interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  tagName : string;
  textContent: string;
  elements: IDomElement[];

  constructor(elementName : string) {
    this.tagName = elementName;
    this.elements = [];
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.tagName}>`);
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.tagName}>`);
  }
}

class TextNode implements IDomElement {
  private text : string;
  constructor(text : string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();