import { Realm } from '@realm/react'

type GenerateTypes = {
  user_id: string
  licence_plate: string
  description: string
}

export class Historic extends Realm.Object<Historic> {
  _id!: string
  user_id!: string
  licence_plate!: string
  description!: string
  status!: string
  created_at!: string
  updated_at!: string

  static generate({ user_id, licence_plate, description }: GenerateTypes) {
    return {
      _id: new Realm.BSON.UUID(),
      user_id,
      licence_plate,
      description,
      status: 'departure',
      created_at: new Date(),
      updated_at: new Date(),
    }
  }

  static schema = {
    name: 'historic',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      user_id: {
        type: 'string',
        indexed: true,
      },
      licence_plate: 'string',
      description: 'string',
      status: 'string',
      created_at: 'date',
      updated_at: 'date',
    },
  }
}
