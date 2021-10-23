/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import List from './List.vue';
import MockTodos from '../../data/mockTodos';

describe('it tests List component', () => {
    test('it mounts given todos prop as TodoItem component', () => {
        const wrapper = shallowMount(List, {
            props: {
                todos: MockTodos
            }
        });

        expect(wrapper.findAllComponents({ name: 'Draggable' })).toHaveLength(1);
        // expect(wrapper.findAll('.todo-item')).toHaveLength(4);
    });
})
