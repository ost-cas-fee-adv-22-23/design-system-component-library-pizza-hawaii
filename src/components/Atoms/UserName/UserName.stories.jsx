import React from 'react';

import UserName from './UserName'

export default {
  title: 'Example/Components/UserName',
  component: UserName,
  argTypes: {
    username: 'Bruce Willis'
  }
}

export const CardDisplay = () => <UserName username={'Display Name'} />

// export const CardDisplay = () => Template.bind({});

// CardDisplay.args = {
  // username: 'Kleopatra' 
// }
