import { Realm, createRealmContext } from '@realm/react'
import { Historic } from './schemas/historic'

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately,
}

export const syncConfig: any = {
  flexible: true,
  newRealmFileBehavior: realmAccessBehavior,
  existingRealmFileBehavior: realmAccessBehavior,
}

export const { useRealm, RealmProvider, useObject, useQuery } =
  createRealmContext({
    schema: [Historic],
  })
