import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() nombre: string;
  @Prop() es_rojo: boolean = false;

  @State() disabled: boolean = false;

  @Listen('click')
  onClick() {
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 3000);
  }


  render() {
    return  <button class={this.es_rojo ? 'rojo' : 'azul'}
            disabled={this.disabled}>
            {this.nombre}
          </button>;
  }
}