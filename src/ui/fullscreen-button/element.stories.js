import '../../media/define.js';
import '../../media/test-utils/define.js';
import './define.js';

import { html } from 'lit';

import { ifNonEmpty } from '../../foundation/directives/index.js';
import {
  FULLSCREEN_BUTTON_ELEMENT_STORYBOOK_ARG_TYPES,
  FULLSCREEN_BUTTON_ELEMENT_TAG_NAME
} from './FullscreenButtonElement.js';

export default {
  title: 'UI/Controls/Fullscreen Button',
  component: FULLSCREEN_BUTTON_ELEMENT_TAG_NAME,
  argTypes: FULLSCREEN_BUTTON_ELEMENT_STORYBOOK_ARG_TYPES
};

/**
 * @param {any} args
 * @returns {import('lit').TemplateResult}
 */
function Template({
  // Properties
  label,
  describedBy,
  disabled,
  // Actions
  onEnterFullscreenRequest,
  onExitFullscreenRequest,
  // Media Properties
  mediaFullscreen
}) {
  return html`
    <vds-media-controller
      @vds-enter-fullscreen-request="${onEnterFullscreenRequest}"
      @vds-exit-fullscreen-request="${onExitFullscreenRequest}"
    >
      <vds-media-container>
        <vds-fake-media-provider
          .canPlayContext="${true}"
          .fullscreenContext="${mediaFullscreen}"
        ></vds-fake-media-provider>

        <vds-fullscreen-button
          label="${ifNonEmpty(label)}"
          described-by="${ifNonEmpty(describedBy)}"
          ?disabled="${disabled}"
        >
          <div slot="enter">Enter</div>
          <div slot="exit">Exit</div>
        </vds-fullscreen-button>
      </vds-media-container>
    </vds-media-controller>
  `;
}

export const FullscreenButton = Template.bind({});