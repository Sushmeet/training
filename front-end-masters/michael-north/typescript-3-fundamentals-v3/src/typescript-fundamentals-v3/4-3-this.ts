const myClickHandler = (this: HTMLButtonElement, event: Event) => {
  this.disabled = true;
};

myClickHandler(new Event("click"));
