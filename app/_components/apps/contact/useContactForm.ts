'use client'

import { useState } from 'react'

export type FormState = 'idle' | 'submitting' | 'success'

export interface FormFields {
  name: string
  email: string
  message: string
}

const EMPTY: FormFields = { name: '', email: '', message: '' }

export function useContactForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<FormFields>>({})

  const setField = (key: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }))

  const validate = (): boolean => {
    const next: Partial<FormFields> = {}
    if (!fields.name.trim())    next.name    = 'Name is required'
    if (!fields.email.trim())   next.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) next.email = 'Enter a valid email'
    if (!fields.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    await new Promise((res) => setTimeout(res, 1200))
    setFormState('success')
  }

  const reset = () => { setFormState('idle'); setFields(EMPTY); setErrors({}) }

  return { fields, formState, errors, setField, handleSubmit, reset }
}
