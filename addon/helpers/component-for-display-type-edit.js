import { helper } from '@ember/component/helper';

export default helper(function componentForDisplayTypeEdit(displayTypeUri) {
  const mapping = {
    'http://lblod.data.gift/display-types/defaultInput' : `submission-form/input-fields/input/edit`,
    'http://lblod.data.gift/display-types/dateTime' : `submission-form/input-fields/date-time/edit`,
    'http://lblod.data.gift/display-types/date' : `submission-form/input-fields/date/edit`,
    'http://lblod.data.gift/display-types/textArea': `submission-form/input-fields/text-area/edit`,
    'http://lblod.data.gift/display-types/conceptSchemeSelector': `submission-form/input-fields/concept-scheme-selector/edit`,
    'http://lblod.data.gift/display-types/files': `submission-form/input-fields/files/edit`,
    'http://lblod.data.gift/display-types/remoteUrls': `submission-form/input-fields/remote-urls/edit`,
    'http://lblod.data.gift/display-types/vLabelOpcentiem': `submission-form/input-fields/vlabel-opcentiem/edit`
  };

  return mapping[displayTypeUri] || '';
});
