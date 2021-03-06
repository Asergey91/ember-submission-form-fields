import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import InputFieldComponent from './input-field';
import { triplesForPath } from '../../../utils/import-triples-for-form';
import { updateSimpleFormValue } from '../../../utils/import-triples-for-form';

export default class SimpleValueInputFieldComponent extends InputFieldComponent {
  @tracked value = null
  @tracked nodeValue = null

  constructor() {
    super(...arguments);
    this.loadProvidedValue();
  }

  loadProvidedValue() {
    const matches = triplesForPath(this.storeOptions);
    if (matches.values.length > 0) {
      this.nodeValue = matches.values[0];
      this.value = matches.values[0].value;
    }
  }

  updateValue(value) {
    updateSimpleFormValue(this.storeOptions, value, this.nodeValue);
    this.hasBeenFocused = true;
    this.loadProvidedValue();
    super.updateValidations();
  }
}
