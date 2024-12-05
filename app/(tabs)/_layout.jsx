import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({
  icon: Icon,
  color: iconColor,
  name: iconName,
  focused: isFocused
}) => {
  return (
    <View className='flex items-center justify-center'>
      <Icon color={iconColor} size={24} />
      <Text style={{ color: iconColor }} className={`${isFocused ? 'font-semibold' : 'font-regular'} text-xs`}>{iconName}</Text>
    </View>
  )
};

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA006',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: '#232533',
        }
      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Home}
                color={color}
                focused={focused}
                name='Home'
              />
            )
          }}
        />

        <Tabs.Screen
          name="criar-reserva"
          options={{
            title: 'Agendar',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Clock}
                color={color}
                focused={focused}
                name='Agendar'
              />
            )
          }}
        />

        <Tabs.Screen
          name="promocao-page"
          options={{
            title: 'promocao-page',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Announce}
                color={color}
                focused={focused}
                name='Promoções'
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout