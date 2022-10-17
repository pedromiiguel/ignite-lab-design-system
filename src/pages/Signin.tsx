import { Envelope, Lock } from 'phosphor-react';
import { Text, TextInput, Checkbox, Button, Logo, Heading } from '../components';

export function SignIn() {
  return (
    <main className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10 p-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <Checkbox label="Lembrar de mim por 30 dias" id="remember" />
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a href="#" className="text-gray-400 underline">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm">
          <a href="#" className="text-gray-400 underline">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </main>
  );
}
