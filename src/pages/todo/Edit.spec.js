/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import MockTodos from "../../data/mockTodos";
import Edit from './Edit.vue';

function store(state = {}, dispatch = () => {}) {
  return {
    state: { todo: { editTodo: {}}, ...state },
    dispatch
  };
}

function storeWithState(state) {
  return store(state);
}

function storeWithDispatch(dispatch) {
  return store({}, dispatch);
}

function storeWithStateAndDispatch(state, dispatch) {
  return store(state, dispatch);
}

describe('it tests Edit component', () => {
  test('it gets data from store for updating', async () => {
    const wrapper = shallowMount(Edit, {
      global: {
        mocks: {
          $store: storeWithState({
            todo: {
              editTodo: MockTodos[0]
            },
          }),
        }
      },
    });

    expect(wrapper.find('input').element.value).toEqual(MockTodos[0].name);
    expect(wrapper.find('select').element.value).toEqual(MockTodos[0].state);
  });

  test('it catches update event from Edit component and dispatches todo/updateTodo', async () => {
    const dispatch = jest.fn();
    const expectedValue = MockTodos[0];

    const wrapper = shallowMount(Edit, {
      global: {
        mocks: {
          $store: storeWithStateAndDispatch(
            {
              todo: {
                editTodo: MockTodos[0]
              }
            },
            dispatch
          ),
        },
      }
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.findAll('form')).toHaveLength(1);
    expect(dispatch).toHaveBeenCalledWith('todo/updateTodo', expectedValue);
  });
});