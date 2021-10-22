import axios from 'axios';
import {actions} from './index.js';

describe('it tests store', () => {
    test('it sends a get request and updates todos when fetchTodos is dispatched', async () => {
        const expectedValue = ['TODO_1', 'TODO_2', 'TODO_3'];
        const spy = jest.spyOn(axios, 'get').mockResolvedValue({ data: expectedValue });

        const state = {todos: []};
        await actions.fetchTodos({state});

        expect(spy).toHaveBeenCalledWith('todos');
        expect(state.todos).toEqual(expectedValue);
    });

    test('it sends a post request and pushes todo into todos when createTodo is dispatched', async () => {
        const expectedValue = 'TODO';
        const spy = jest.spyOn(axios, 'post').mockResolvedValue();

        const state = {todos: []};
        await actions.createTodo({state}, expectedValue);

        expect(spy).toHaveBeenCalledWith('todos', { name: expectedValue });
        expect(state.todos).toEqual([expectedValue]);
    });
});
