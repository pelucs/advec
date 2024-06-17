"use client"

import { z } from "zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaForm = z.object({
  name: z.string().min(4, "Nome deve conter no mínimo 4 caracteres"),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(4, "Senha deve conter no mínimo 4 caracteres"),
  confirm: z.string().min(4, "Senha deve conter no mínimo 4 caracteres"),
})
.refine(data => data.password === data.confirm, {
  message: "As senhas não estão iguais",
  path: ["confirm"]
});

type FormTypes = z.infer<typeof schemaForm>;

export function RegisterForm() {

  const { handleSubmit, register, formState: { errors } } = useForm<FormTypes>({
    resolver: zodResolver(schemaForm)
  });

  const signin = (data: FormTypes) => {
    console.log(data);
  }

  return(
    <form 
      onSubmit={handleSubmit(signin)} 
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Nome completo</label>

        <input
          {...register("name")}
          placeholder="Informe seu email"
          className="w-full py-2 px-3 rounded border bg-transparent"
        />

        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Email</label>

        <input
          {...register("email")}
          placeholder="Informe seu email"
          className="w-full py-2 px-3 rounded border bg-transparent"
        />

        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Senha</label>

        <input
          type="password"
          {...register("password")}
          placeholder="Informe sua senha"
          className="w-full py-2 px-3 rounded border bg-transparent"
        />

        {errors.password && (
          <span className="text-xs text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Confirmação da senha</label>

        <input
          type="password"
          {...register("confirm")}
          placeholder="Informe sua senha"
          className="w-full py-2 px-3 rounded border bg-transparent"
        />

        {errors.confirm && (
          <span className="text-xs text-red-500">{errors.confirm.message}</span>
        )}
      </div>

      <span className="text-muted-foreground">
        Esqueceu a senha? <span className="font-semibold underline text-orange-500">clique aqui</span>
      </span>

      <Button type="submit" className="button-theme">
        Entrar
      </Button>
    </form>
  );
}