import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service timings;

  init() {
    this._super();

    let warmup = []
    for (let i = 0; i < 10; i++) {
      warmup.push(i)
    }

    let items = [];
    for (let i = 0; i < 1000; i++) {
      items.push(i)
    }

    this.set('warmup', items)
    this.set('items', items)
  }
}
