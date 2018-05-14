import React from 'react';
import { storiesOf } from '@storybook/react';
import { InlineForm } from './InlineForm';

let stories = storiesOf('Forms/InlineForm', module);

stories.add('Default', () =>
  <InlineForm 
    method="post"
    action="http://bradfrost.com"
    placeholder="Placeholder"
    cta="Action" 
  />
);
