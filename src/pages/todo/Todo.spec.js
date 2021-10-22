import { shallowMount } from "@vue/test-utils";
import Todo from "./Todo.vue";

function store(state = {}, dispatch = () => { }) {
    return {
        state: { todos: [], ...state },
        dispatch,
    };
}

function storeWithState(state) {
    return store(state);
}

function storeWithDispatch(dispatch) {
    return store({}, dispatch);
}

describe("it tests Todo component", () => {
    test("it mounts Create and List components", () => {
        const wrapper = shallowMount(Todo, {
            global: {
                mocks: { $store: store() },
            },
        });

        expect(wrapper.findComponent({ name: "Create" }).exists()).toBeTruthy();
        expect(wrapper.findComponent({ name: "List" }).exists()).toBeTruthy();
    });

    test("it reads todos from store and passes them into List as prop", () => {
        const expectedValue = ["TODO_1", "TODO_2", "TODO_3"];

        const wrapper = shallowMount(Todo, {
            global: {
                mocks: {
                    $store: storeWithState({
                        todos: expectedValue,
                    }),
                }
            },
        });

        expect(wrapper.findComponent({name: 'List'}).vm.todos).toEqual(expectedValue);
    });

    test("it catches create event from Create component and dispatches createTodo", () => {
        const dispatch = jest.fn();
        const expectedValue = "TODO_NAME";

        shallowMount(Todo, {
            global: {
                stubs: {
                    Create: {
                        template: `<template></template>`,
                        mounted() {
                            this.$emit("create", expectedValue);
                        },
                    },
                },
                mocks: {
                    $store: storeWithDispatch(dispatch),
                },
            },
        });

        expect(dispatch).toHaveBeenCalledWith("createTodo", expectedValue);
    });
});
