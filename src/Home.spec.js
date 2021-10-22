import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';

describe('it tests Home component', () => {
    test('it displays welcome message', () => {
        const wrapper = shallowMount(Home, {
            data: () => ({ welcomeMessage: 'WELCOME_MESSAGE' })
        });

        expect(wrapper.text()).toContain('WELCOME_MESSAGE');
    });
});
