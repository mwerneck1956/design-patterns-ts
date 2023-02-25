interface IVisualComponent {
  draw(): void;
  resize(): void;
}

class VisualComponent implements IVisualComponent {
  constructor() {}

  public draw(): void {
    console.log("Drawing");
  }

  public resize(): void {
    console.log("Resizing");
  }
}

class Decorator implements IVisualComponent {
  protected visualComponent: IVisualComponent;

  constructor(visualComponent: IVisualComponent) {
    this.visualComponent = visualComponent;
  }

  draw(): void {
    this.visualComponent.draw();
  }

  resize(): void {
    this.visualComponent.resize();
  }
}

class BorderDecorator extends Decorator {
  constructor(visualComponent: IVisualComponent) {
    super(visualComponent);
  }

  draw(): void {
    super.draw();

    console.log("Drawing a border");
  }
}

const textView = new VisualComponent();

textView.draw();

const textViewWithBorder = new BorderDecorator(textView);

textViewWithBorder.draw();
