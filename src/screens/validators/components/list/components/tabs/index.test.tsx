import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TabsHeader from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Search: (props) => <div id="Search" {...props} />,
}));

jest.mock('../../contexts/validators', () => ({
  useValidatorsContext: () => ({
    tab: 0,
    handleTabChange: jest.fn(),
    handleSearch: jest.fn(),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});