import { createRealmContext } from '@realm/react'
import { Historic } from './schemas/historic'

export const { useRealm, RealmProvider, useObject, useQuery } =
  createRealmContext({
    schema: [Historic],
  })
