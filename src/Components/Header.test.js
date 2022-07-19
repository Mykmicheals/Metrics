
import { render } from '@testing-library/react';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import Header from './Header';

test('contains-home', () => {
    render(<HomeScreen />)

    const headerLogo = screen.getByText('affiliate', { exact: false })
    expect(headerLogo).toBeInTheDocument();
})