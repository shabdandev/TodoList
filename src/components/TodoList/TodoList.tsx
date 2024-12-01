"use client";
import { FC, useState } from "react";
import scss from "./TodoList.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostProductMutation } from "@/redux/api/postPr";
import { useUploadMutation } from "@/redux/api/upload";
import { useGetProductQuery } from "@/redux/api/getPr";
import { useDeleteProductMutation } from "@/redux/api/delPr";
// import { useDeleteProductMutation } from "@/redux/api/delPr";
// import { useEditProducMutation } from "@/redux/api/editPr";

interface ITodo {
  id?: number | null;
  image: string;
  name: string;
  description: string;
  file?: string[];
}

const TodoList: FC = () => {
  const { register, reset, handleSubmit } = useForm<ITodo>();
  //   const [isEdit, setIsEdit] = useState<ITodo>({
  //     description: "",
  //     image: "",
  //     name: "",
  //     id: null,
  //   });
  const { data } = useGetProductQuery();
  const [uploadMutation] = useUploadMutation();
  const [postProductMutation] = usePostProductMutation();
  const [deleteProductMutation] = useDeleteProductMutation();
  //   const [editProducMutation] = useEditProducMutation();

  const postPr: SubmitHandler<ITodo> = async (data) => {
    const formData = new FormData();
    formData.append("file", data?.file![0]);
    const { data: upload } = await uploadMutation(formData);
    const newData: ITodo = {
      image: String(upload?.url) || data.image,
      name: data.name,
      description: data.description,
    };
    const res = await postProductMutation(newData);
    console.log("🚀 ~ constpostPr:SubmitHandler<ITodo>= ~ res:", res);
    reset();
  };

  const delPr = async (id: number) => {
    const { data } = await deleteProductMutation(id);
    console.log("🚀 ~ delPr ~ data:", data);
  };

  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <form onSubmit={handleSubmit(postPr)}>
              <input
                type="file"
                placeholder="image"
                {...register("image", { required: true })}
              />
              <input
                type="text"
                placeholder="name"
                {...register("name", {
                  required: true,
                })}
              />
              <input
                type="text"
                placeholder="description"
                {...register("description", {
                  required: true,
                })}
              />
              <button type="submit">Add Todo</button>
            </form>
            {data?.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <h2>{item.description}</h2>
                <button onClick={() => delPr(item.id!)}>delete</button>
                <button>edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
