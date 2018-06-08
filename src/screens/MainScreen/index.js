import React from 'react';
import { Layout } from 'components';
import ReactMarkdown from 'react-markdown';

import main from './main.md';

const MainScreen = () =>
<Layout>
  <ReactMarkdown source={main} />
</Layout>;

export default MainScreen;
