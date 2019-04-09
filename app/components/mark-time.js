import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MarkTimeComponent extends Component {
  @service timings;

  constructor(owner, args) {
    const now = performance.now();
    const { label } = args

    super(...arguments);
    const { timings } = this;
    let delta;
    if (timings.lastTimestamp) {
      delta = now - timings.lastTimestamp;
    }
    timings.lastTimestamp = now
    setTimeout(() => {
      this.timings.results.pushObject({ label, delta });
    }, 10)
  }
}
