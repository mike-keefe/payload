'use client'
import React from 'react'
import { FieldPathProvider, useFieldPath } from '../FieldPathProvider'

export const RenderField: React.FC<{
  name?: string
  Field: React.ReactNode
}> = (props) => {
  const { name, Field } = props
  const { path: pathFromContext, schemaPath: schemaPathFromContext } = useFieldPath()
  const path = `${pathFromContext ? `${pathFromContext}.` : ''}${name || ''}`
  const schemaPath = `${schemaPathFromContext ? `${schemaPathFromContext}.` : ''}${name || ''}`

  return (
    <FieldPathProvider path={path} schemaPath={schemaPath}>
      {Field}
    </FieldPathProvider>
  )
}