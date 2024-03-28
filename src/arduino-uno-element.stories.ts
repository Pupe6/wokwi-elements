import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './arduino-uno-element';

storiesOf('Arduino Uno', module)
  .addParameters({ component: 'ArduinoUnoElement' })
  .addDecorator(withKnobs)
  .add(
    'Uno R3',
    () => html`
      <wokwi-arduino-uno
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
      ></wokwi-arduino-uno>
    `
  )
  .add(
    'Uno R3 (Large)',
    () => html`
      <wokwi-arduino-uno
        style="zoom: 2"
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
        @button-press=${action('button-press')}
        @button-release=${action('button-release')}
      ></wokwi-arduino-uno>
    `
  );
