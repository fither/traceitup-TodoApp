/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

describe('it tests TodoItem component', () => {
    test('it displays given prop', () => {
        const sendedValue = {
            id: 1,
            name: 'TODO_NAME',
            state: 'Pending'
        }
        const wrapper = shallowMount(TodoItem, {
            props: {
                todo: sendedValue
            }
        });

        expect(wrapper.text()).toContain('TODO_NAME');
    });
});
