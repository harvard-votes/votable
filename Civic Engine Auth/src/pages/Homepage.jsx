import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import Table from "../components/Table"

export default function Homepage({ contacts, onDelete }) {
  return (
    <Layout>
      <Heading className="m-3">Welcome</Heading>

      <Table contacts={contacts} onDelete={onDelete} />
      
    </Layout>
  )
}
