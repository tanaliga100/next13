import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ITodo } from "../../interfaces/Todo";

type Props = {
  todos: ITodo[];
};

const TodoPage: NextPage<Props> = ({ todos }) => {
  const router = useRouter();

  const handleRedirect = (todoId: number) => {
    router.push(`/todos/${todoId}`);
  };
  return (
    <div className="home-page">
      <h1>Todo-page</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <hr />
            <div className="todo-item" onClick={() => handleRedirect(todo.id)}>
              <small className="todo-title">{todo.title}</small>
              <small>{todo.completed ? "Completed" : "In Progress"}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();

  return {
    props: {
      todos: data || [],
    },
  };
};
