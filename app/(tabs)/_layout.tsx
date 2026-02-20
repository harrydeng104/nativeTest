import { Tabs } from "expo-router"
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{ 
                title: 'Home',
                headerShown: false 
            }}
        />
        <Tabs.Screen
            name="tab2"
            options={{ 
                title: 'tab2',
                headerShown: false 
            }}
        />
    </Tabs>
  )
}

export default _layout