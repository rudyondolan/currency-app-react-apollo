import React from 'react';
import { Dropdown, Grid, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import options from './data.json';

function Form({ onChange, onClick }) {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width="13">
            <Dropdown
              placeholder="Select Currency"
              fluid
              search
              selection
              options={options}
              onChange={(e, data) => onChange(data.value)}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <Button onClick={() => onClick()} fluid size="medium" color="teal">
              <FormattedMessage {...messages.submit} />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Form;
