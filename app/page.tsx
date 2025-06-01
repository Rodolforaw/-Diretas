"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

// Dados mockados
const estatisticas = {
  totalObras: 156,
  obrasAndamento: 89,
  obrasConcluidas: 45,
  obrasAtrasadas: 22,
  funcionariosAtivos: 234,
  materialGasto: 1250000,
}

const distritos = [
  { nome: "Centro", obras: 23, andamento: 15, concluidas: 8, latitude: -22.9068, longitude: -43.1729 },
  { nome: "Inoã", obras: 18, andamento: 12, concluidas: 6, latitude: -22.9408, longitude: -42.9306 },
  { nome: "Itaipuaçu", obras: 31, andamento: 19, concluidas: 12, latitude: -22.9403, longitude: -42.8444 },
  { nome: "Ponta Negra", obras: 15, andamento: 9, concluidas: 6, latitude: -22.9778, longitude: -42.7447 },
  { nome: "São José do Imbassaí", obras: 22, andamento: 14, concluidas: 8, latitude: -22.8667, longitude: -42.8333 },
  { nome: "Guaratiba", obras: 19, andamento: 11, concluidas: 8, latitude: -22.9458, longitude: -42.7942 },
  { nome: "Cordeirinho", obras: 28, andamento: 9, concluidas: 5, latitude: -22.9575, longitude: -42.7619 },
]

const obrasRecentes = [
  {
    id: "OS-2024-001",
    titulo: "Pavimentação Rua das Flores",
    distrito: "Centro",
    status: "Em Andamento",
    progresso: 75,
    encarregado: "João Silva",
    dataInicio: "2024-01-15",
    previsaoTermino: "2024-03-20",
  },
  {
    id: "OS-2024-002",
    titulo: "Construção Praça da Juventude",
    distrito: "Inoã",
    status: "Em Andamento",
    progresso: 45,
    encarregado: "Maria Santos",
    dataInicio: "2024-02-01",
    previsaoTermino: "2024-05-15",
  },
  {
    id: "OS-2024-003",
    titulo: "Reforma Escola Municipal",
    distrito: "Itaipuaçu",
    status: "Atrasada",
    progresso: 30,
    encarregado: "Carlos Oliveira",
    dataInicio: "2024-01-10",
    previsaoTermino: "2024-02-28",
  },
  {
    id: "OS-2024-004",
    titulo: "Instalação Iluminação LED",
    distrito: "Ponta Negra",
    status: "Concluída",
    progresso: 100,
    encarregado: "Ana Costa",
    dataInicio: "2024-01-05",
    previsaoTermino: "2024-02-15",
  },
]

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Verificar se existe usuário logado
    const userData = localStorage.getItem("user")

    if (userData) {
      // Se logado, redirecionar para o dashboard
      router.push("/dashboard")
    } else {
      // Se não logado, redirecionar para login
      router.push("/login")
    }
  }, [router])

  // Página de loading enquanto verifica autenticação
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">SOMAR +Diretas</h1>
        <p className="text-gray-600">Carregando sistema...</p>
      </div>
    </div>
  )
}
