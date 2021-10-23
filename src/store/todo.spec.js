/* eslint-disable no-undef */
import axios from 'axios';
// import {actions} from './index.js';
import todo from './todo';

describe('it tests store', () => {
    test('it sends a get request and updates todos when fetchTodos is dispatched', async () => {
        const expectedValue = ['TODO_1', 'TODO_2', 'TODO_3'];
        const spy = jest.spyOn(axios, 'get').mockResolvedValue({ data: expectedValue });

        const state = {todos: []};
        await todo.actions.fetchTodos({state});

        expect(spy).toHaveBeenCalledWith('todos');
        expect(state.todos).toEqual(expectedValue);
    });

    test('it sends a post request and pushes todo into todos when createTodo is dispatched', async () => {
        const sendedValue = 'TODO';
        const expectedValue = {
            id: 1,
            name: sendedValue,
            state: 'Pending'
        }
        const spy = jest.spyOn(axios, 'post').mockResolvedValue();

        const state = {todos: []};
        await todo.actions.createTodo({state}, sendedValue);

        expect(spy).toHaveBeenCalledWith('todos', { name: sendedValue });
        expect(state.todos[0]).toEqual(expectedValue);
    });
});
