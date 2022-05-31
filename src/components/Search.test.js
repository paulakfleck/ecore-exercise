import { render, fireEvent } from '@testing-library/react'

import Search from './Search';

describe('Search component', () => {
    test('renders "Search" correctly', () => {
        
        const getFilter = (searchValue) => {
            expect(searchValue).toBe('search input')
        }
        
        const utils = render(<Search placeholder="Placeholder mock" sendFilter={getFilter} />);
        const input = utils.getByPlaceholderText('Placeholder mock')
  
        fireEvent.change(input, {target: {value: 'search input'}})
    })
})