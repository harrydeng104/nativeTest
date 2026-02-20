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
            name="calibration"
            options={{ 
                title: 'calibration',
                headerShown: false 
            }}
        />
        <Tabs.Screen
            name="camera"
            options={{ 
                title: 'camera',
                headerShown: false 
            }}
        />
        <Tabs.Screen
            name="print"
            options={{ 
                title: 'print',
                headerShown: false 
            }}
        />
    </Tabs>
  )
}

export default _layout