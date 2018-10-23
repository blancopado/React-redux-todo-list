import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodoList from '../TodoList';

configure({ adapter: new EnzymeAdapter() });

describe('TodoList', () => {

  const todos =  [{ id: "123", text: 'todo1', completed: false}, { id: "456", text: 'todo2', completed: false }];
  const mockOnToggleClick = jest.fn();
  const mockOnDeleteClick = jest.fn();
  let todoListWrapper;

  beforeEach(() => {
    todoListWrapper = shallow(<TodoList todos={todos} onToggleClick={mockOnToggleClick} onDeleteClick={mockOnDeleteClick} />);
  });

  it('should render the TodoList component', () => {
    const todolist = todoListWrapper.find(`[data-test='component-todolist']`);
    expect(todolist.length).toEqual(1);
  });

  it('should render the list of todos', () => {
    expect(todoListWrapper.find('ul').children().length).toEqual(todos.length);
  });

});