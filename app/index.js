import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className='space-y-5 ml-3'>
          <Link href="/login" className='font-bold'>login</Link>
          <Link href="/cadastro" className='font-bold'>cadastro</Link>
          <Link href="/esquecisenha" className='font-bold'>EsqueciSenha</Link>
          <Link href="/EditarUsuario" className='font-bold'>EditarUsuario</Link>
          <Link href="/cliente/criar-reserva" className='font-bold'>Cria reserva</Link>
          <Link href="/home" className='font-bold'>Homepage</Link>
          <Link href="/calendario" className='font-bold'>calendario</Link>
          <Link href="/promocao-page" className='font-bold'>Pagina de Promoção</Link>
          <Link href="/funcionario/VerAgendamento" className='font-bold'>VerAgendamento</Link>
          <Link href="/admin/PaginaSalao" className='font-bold'>PaginaSalão</Link>
          <Link href="/cliente/CanselamentoHorario" className='font-bold'>Canselamento Horario</Link>
          <Link href="/admin/CriarFuncionario" className='font-bold'>Criação Funcionario</Link>
          <Link href="/admin/ListarFuncionarios" className='font-bold'>listar funcionarios</Link>
          <Link href="/admin/AdicionarServico" className='font-bold'>Adicionar Servico</Link>
          <Link href="/admin/ListarServicos" className='font-bold'>Listar Servicos</Link>
          <Link href="/admin/CriarPromocao" className='font-bold'>Criar Promoção</Link>
          <Link href="/admin/VisualizarPromocoes" className='font-bold'>Visualizar Promocoes</Link>
          <Link href="/admin/ProgramarDisponibilidade" className='font-bold'>Programar Disponibilidade</Link>
          <Link href="/cliente/Selecionar-Barbearia" className='font-bold'>Selecionar-Barbearia</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
