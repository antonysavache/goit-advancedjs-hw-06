// Завдання 4: Generic класи та інтерфейси

interface ComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Демонстрация работы
const pageProps: ComponentProps = {
  title: 'Welcome to TypeScript'
};

const page = new Page(pageProps);
page.pageInfo(); // Виведе: Welcome to TypeScript

// Додатковий приклад з іншими типами props
interface ButtonProps {
  text: string;
  color: string;
  disabled: boolean;
}

class Button extends Component<ButtonProps> {
  render() {
    const status = this.props.disabled ? 'disabled' : 'enabled';
    console.log(`Button "${this.props.text}" (${this.props.color}) is ${status}`);
  }
}

const buttonProps: ButtonProps = {
  text: 'Click me',
  color: 'blue',
  disabled: false
};

const button = new Button(buttonProps);
button.render();
