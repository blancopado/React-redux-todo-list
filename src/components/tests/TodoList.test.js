import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodoList from '../TodoList';
import { storeFactory } from './testUtils';

configure({ adapter: new EnzymeAdapter() });

describe('TodoList', () => {

  const store = storeFactory({ todos: [{ id: 1, text: 'todo1', completed: false}, { id: 2, text: 'todo2', completed: false }] });
  let todoListWrapper;

  beforeEach(() => {
    todoListWrapper = shallow(<TodoList store={store} />).dive();
  });

  it('should render the TodoList component', () => {
    const todolist = todoListWrapper.find(`[data-test='component-todolist']`);
    expect(todolist.length).toEqual(1);
  });

  it('should render the list of todos', () => {
    const todos = store.getState().todos;
    expect(todoListWrapper.find('ul').children().length).toEqual(todos.length);
  });

});