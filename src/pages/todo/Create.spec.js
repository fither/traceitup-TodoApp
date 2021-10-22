import { shallowMount } from '@vue/test-utils';
import Create from './Create.vue';

describe('it tests Create component', () => {
    test('it emits create event and resets the form when form is valid and create button is clicked', async () => {
        const div = document.createElement('div');
        div.id = 'root';
        document.body.append(div);

        const expectedValue = 'TODO_NAME';

        const wrapper = shallowMount(Create, {
            attachTo: '#root',
        });

        await wrapper.find('input').setValue(expectedValue);

        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted().create).toBeTruthy();
        expect(wrapper.emitted().create[0]).toEqual([expectedValue]);
        expect(wrapper.find('input').element.value).toEqual('');
    });
});
