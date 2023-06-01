import React from 'react';
import ReactDOM from 'react-dom/client';
import { PivotGroupNavigationPanel } from './components/navigation-pane';
import { Label, Stack } from '@fluentui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const getPivotsGroup = (prefix: string) => ['Meeting Policy', 'Confererncing policy', 'Live Events policy', 'Webinar' ].
      map(item => ({
        pivot: {
          headerText: prefix + "-->" + item
        },
        content: (<Stack>
          <Stack.Item> {prefix + "-->" + item}</Stack.Item>
          <Stack.Item> {prefix + "-->" + item}</Stack.Item>
        </Stack>)
      }))

const pivotGroupNavigation = [{
  route: '/messaging',
  pivots: getPivotsGroup('MSG')
}]

root.render(
  <React.StrictMode>
    <PivotGroupNavigationPanel pivotNavGroups={pivotGroupNavigation}
    />
  </React.StrictMode>
);
