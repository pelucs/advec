"use client"

import { z } from "zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { UserContext } from "@/context/user-context";

const schemaForm = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(4, "Senha deve conter no mínimo 4 caracteres"),
});

type FormTypes = z.infer<typeof schemaForm>;

export function LoginForm() {

  const navigation = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, register, formState: { errors } } = useForm<FormTypes>({
    resolver: zodResolver(schemaForm)
  });
  
  const { setUser } = useContext(UserContext);
  
  const signin = async (data: FormTypes) => {
    setIsLoading(true);

    const { email, password } = data;

    try {
      const res = await api.post("/user/login", {
        email,
        password
      });
      
      const expireTokenInSeconds = 60 * 60 * 24 * 30;
      document.cookie = `token=${res.data.token}; Path=/; max-age=${expireTokenInSeconds};`
      
      setUser(res.data.user); 

      navigation.push("/app");

    } catch(error: any) {
      if(error.response.data.error === "User email and password does not match.") {
        toast({
          title: "Usuário já cadastrado com esse email!"
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <form 
      onSubmit={handleSubmit(signin)} 
      className="flex flex-col gap-4"
    >
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

      <span className="text-muted-foreground">
        Esqueceu a senha? <span className="font-semibold underline text-orange-500">clique aqui</span>
      </span>

      <Button 
        type="submit" 
        className="button-theme"
        disabled={isLoading}
      >
        { isLoading ? <Loader className="size-4 animate-spin"/> : "Entrar"}
      </Button>
    </form>
  );
}