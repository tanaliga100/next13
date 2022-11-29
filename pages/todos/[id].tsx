import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { ITodo } from "../../interfaces/Todo";

type Props = {
 todo: ITodo | null;
};

const TodoViews: NextPage<Props> = ({ todo }) => {
  console.log("todo", todo);

  return (
    <>
      <section className="todo-card">
        <h1>Todo ID: {todo?.userId}</h1>
        <h5>Todo Title: {todo?.title}</h5>
        <h3>is Completed: {todo?.completed ? "Done" : "In Progress"}</h3>
      </section>
    </>
  );
};

export default TodoViews;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  const paths = data.map((results: ITodo) => {
    return {
      params: { id: String(results.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const todoId = context?.params?.id;
  let results: ITodo | null = null;
  if (todoId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    results = await res.json();
  }

  return {
    props: {
      todo: results,
    },
  };
};
