import React from 'react'
import { Modal, StyleSheet } from 'react-native'

export default function LogoutPopup({ children, setVisibility, visibility }: {
  visibility: boolean
  setVisibility?: () => void
  children: React.ReactNode
}) {
  const styles = StyleSheet.create({
  })
  return (
    <Modal visible={visibility} transparent >
      {children}
    </Modal>
  )
}
