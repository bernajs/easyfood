import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import { Mapa, Categorias, Promociones, Perfil } from '../views'

const Navigation = TabNavigator({
  promociones: { screen: Promociones },
  mapa: { screen: Mapa },
  categorias: { screen: Categorias },
  perfil: { screen: Perfil }
})

export default Navigation
