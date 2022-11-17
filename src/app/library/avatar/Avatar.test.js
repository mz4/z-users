import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Render Avatar component', () => {
  const avatar = <Avatar alt="avataralt" src="avatarsrc" />;
  const srcUrl = 'http://localhost/avatarsrc';
  it('Create a snapshot', () => {
    const component = renderer.create(avatar);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Render with props', () => {
    const { getByAltText, getByRole } = render(avatar);
    const img = getByRole('img');
    const elementAlt = getByAltText('avataralt');
    expect(elementAlt).toBeDefined();
    expect(img.src).toBe(srcUrl);
  });
});
