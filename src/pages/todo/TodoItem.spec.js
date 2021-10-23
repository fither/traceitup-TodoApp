/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';
import MockTodos from '../../data/mockTodos';

describe('it tests TodoItem component', () => {
    test('it displays given prop', () => {
        const sendedValue = MockTodos[0]
        const wrapper = shallowMount(TodoItem, {
            props: {
                todo: sendedValue
            }
        });

        expect(wrapper.text()).toContain(sendedValue.name);
    });
});
