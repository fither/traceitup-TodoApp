import { shallowMount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

describe('it tests TodoItem component', () => {
    test('it displays given prop', () => {
        const wrapper = shallowMount(TodoItem, {
            props: {
                todo: 'TODO_NAME'
            }
        });

        expect(wrapper.text()).toContain('TODO_NAME');
    });
});
