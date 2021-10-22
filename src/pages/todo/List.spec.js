import { shallowMount } from '@vue/test-utils';
import List from './List.vue';

describe('it tests List component', () => {
    test('it mounts given todos prop as TodoItem component', () => {
        const wrapper = shallowMount(List, {
            props: {
                todos: ['TODO_1', 'TODO_2', 'TODO_3', 'TODO_4']
            }
        });

        expect(wrapper.findAllComponents({ name: 'TodoItem' })).toHaveLength(4);
    });
})
