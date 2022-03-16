import { safelyDefineCustomElement } from '@vidstack/foundation';

import { TimeSliderElement } from '../ui/time-slider/TimeSliderElement.js';

safelyDefineCustomElement('vds-time-slider', TimeSliderElement);

declare global {
  interface HTMLElementTagNameMap {
    'vds-time-slider': TimeSliderElement;
  }
}