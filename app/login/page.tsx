"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Building2, Shield, Users } from "lucide-react"
import { authenticateUser } from "@/lib/supabase"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const user = await authenticateUser(username, password)

      if (user) {
        // Salvar dados do usuário no localStorage
        localStorage.setItem("currentUser", JSON.stringify(user))
        localStorage.setItem("isAuthenticated", "true")

        // Redirecionar para o dashboard
        router.push("/dashboard")
      } else {
        setError("Usuário ou senha incorretos")
      }
    } catch (err) {
      console.error("Erro no login:", err)
      setError("Erro ao fazer login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const demoUsers = [
    { username: "admin", password: "admin123", role: "Administrador", icon: Shield },
    { username: "gerente01", password: "gerente123", role: "Gerente", icon: Users },
    { username: "master", password: "master2024", role: "Master", icon: Building2 },
  ]

  const fillCredentials = (user: { username: string; password: string }) => {
    setUsername(user.username)
    setPassword(user.password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo e Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">SOMAR +Diretas</h1>
          <p className="text-gray-600">Sistema de Controle de Obras Públicas</p>
        </div>

        {/* Formulário de Login */}
        <Card>
          <CardHeader>
            <CardTitle>Fazer Login</CardTitle>
            <CardDescription>Entre com suas credenciais para acessar o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  disabled={isLoading}
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Usuários Demo */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Usuários de Demonstração</CardTitle>
            <CardDescription className="text-xs">Clique para preencher automaticamente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {demoUsers.map((user) => {
              const IconComponent = user.icon
              return (
                <Button
                  key={user.username}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs"
                  onClick={() => fillCredentials(user)}
                  disabled={isLoading}
                >
                  <IconComponent className="mr-2 h-3 w-3" />
                  <span className="font-medium">{user.username}</span>
                  <span className="ml-auto text-gray-500">{user.role}</span>
                </Button>
              )
            })}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2024 SOMAR - Soluções em Obras e Meio Ambiente</p>
          <p>Prefeitura Municipal de Maricá - RJ</p>
        </div>
      </div>
    </div>
  )
}
