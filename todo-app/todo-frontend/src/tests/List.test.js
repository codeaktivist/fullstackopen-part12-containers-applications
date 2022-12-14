import React from 'react'
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from '../Todos/Todo'

describe('component test on rendered todos', () => {
    const mockTodo = {
        _id: "aaaabbbbccccddddeeeeffff",
        text: "This is a todo for testing",
        done: true
    }
    const mockClickDelete = jest.fn()
    const mockClickComplete = jest.fn() 

    beforeEach(() => {
        render(<Todo todo={mockTodo} onClickDelete={() => mockClickDelete} onClickComplete={() => mockClickComplete} />)
    })

    test('todo renders to screen', async () => {
        const element = screen.getByText('This is a todo for testing')
        expect(element).toBeDefined()
    })

    test('todo can get clicked', async () => {    
        const user = userEvent.setup()
        const button = screen.getByText('Delete')
        screen.debug(button)
        await user.click(button)
        expect(mockClickDelete.mock.calls).toHaveLength(1)
    })  
})