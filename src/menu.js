import {Menu} from './core/menu'
export class ContextMenu extends Menu {
 
 
}
import { Menu } from "@core/menu";

class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    return this.el;
  }

  close() {}

  add(instanceofModule) {}
}

export default ContextMenu;
