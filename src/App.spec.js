import {shallowMount} from '@vue/test-utils';
import App from './App.vue';

describe('it tests App component', () => {

    test('it updates document title with title data', () => {
        shallowMount(App, {
            data: () => ({title: 'DOCUMENT_TITLE'})
        });

        expect(document.title).toEqual('DOCUMENT_TITLE');
    });
});
